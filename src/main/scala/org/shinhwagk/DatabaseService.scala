package org.shinhwagk

import java.sql._

import scala.collection.mutable.ArrayBuffer
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

/**
  * Created by zhangxu on 2016/12/6.
  */
object DatabaseService extends App {
  Class.forName("oracle.jdbc.driver.OracleDriver");

  def query(sql: String): Future[ArrayBuffer[String]] = {
    Future {
      val conn = DriverManager.getConnection("jdbc:oracle:thin:@122.225.54.25:1521/test", "system", "wingewq")
      val rs = conn.createStatement().executeQuery("select DATA_DEFAULT from dba_tab_columns where rownum < 100")
      val buff = new ArrayBuffer[String]()
      while (rs.next()) {
        buff += rs.getString("DATA_DEFAULT")
      }
      conn.close()
      buff
    }
  }
}
