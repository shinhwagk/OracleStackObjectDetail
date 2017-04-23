package models

import java.sql.{DriverManager, ResultSet}

import play.api.libs.json._

import scala.collection.immutable.Map
import scala.collection.mutable.ArrayBuffer
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

case class QueryInfo(jdbcUrl: String, username: String, password: String, sqlText: String, parameters: Seq[String])

object QueryInfo {
  implicit val format: Format[QueryInfo] = Json.format
}

object QueryModeEnum extends Enumeration {
  type QueryMode = Value
  val ARRAY = Value("ARRAY")
  val MAP = Value("MAP")
}


object CollectingOracle {

  Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();

  def mode(mode: String, qi: QueryInfo): String = {
    QueryModeEnum.withName(mode.toUpperCase) match {
      case QueryModeEnum.ARRAY => query[List[String]](qi, queryToAarry)
      case QueryModeEnum.MAP => query[Map[String, String]](qi, queryToMap)
    }
  }

  def query[T](qi: QueryInfo, f: (ResultSet) => JsValue) = {
    val jdbcUrl = qi.jdbcUrl
    val username = qi.username
    val password = qi.password
    val sqlText = qi.sqlText
    val parameters = qi.parameters

    val conn = DriverManager.getConnection(jdbcUrl, username, password)
    val stmt = conn.prepareStatement(sqlText)
    (1 to parameters.length).foreach(num => stmt.setObject(num, 5))
    val rs = stmt.executeQuery()

    val rows = f(rs)

    stmt.close()
    rs.close()
    conn.close()

    rows.toString()
  }

  def queryToMap(rs: ResultSet): JsValue = {
    val meta = rs.getMetaData
    val rows = new ArrayBuffer[Map[String, JsValue]]()
    import scala.collection.mutable.Map
    while (rs.next()) {
      val row: Map[String, JsValue] = Map.empty
      for (i <- 1 to meta.getColumnCount) {
        row += (meta.getColumnName(i) -> oracleTypeConvertJsonType(meta.getColumnTypeName(i), rs.getObject(i)))
      }
      rows += row.toMap
    }
    println(rows.toList)
    Json.toJson(rows.toList)
  }

  def queryToAarry(rs: ResultSet): JsValue = {
    val meta = rs.getMetaData
    val rows: ArrayBuffer[List[String]] = new ArrayBuffer[List[String]]()
    rows += (1 to meta.getColumnCount).toList.map(meta.getColumnName)
    while (rs.next()) {
      rows += (1 to meta.getColumnCount).toList.map(i => (if (rs.getString(i) == null) "" else rs.getString(i)))
    }
    Json.toJson(rows.toList)
  }

  def oracleTypeConvertJsonType(oracleType: String, value: Object): JsValue = {
    val scalaValue: Any = value
    oracleType match {
      case "NUMBER" =>
        Option(scalaValue).map(_ match {
          case Int => JsNumber(scalaValue.asInstanceOf[Int])
          case Long => JsNumber(scalaValue.asInstanceOf[Long])
          case Double => JsNumber(scalaValue.asInstanceOf[Double])
          case x: java.math.BigDecimal => JsNumber(BigDecimal(scalaValue.asInstanceOf[java.math.BigDecimal]))
          case _ => throw new Exception(s"oracle Type ${oracleType} Convert unknow, value: ${scalaValue.toString}.")
        }).getOrElse(JsNull)
      case "VARCHAR2" => JsString(value.asInstanceOf[String])
      case _ => throw new Exception(s"oracle Type Common ${oracleType} Convert unknow.")
    }
  }
}