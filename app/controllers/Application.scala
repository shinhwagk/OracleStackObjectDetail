package controllers

import javax.inject.Inject

import models.{CollectingOracle, Connector, QueryInfo}
import play.api.libs.json.{Format, Json}
import play.api.libs.ws.WSClient
import play.api.mvc._

import scala.concurrent.{ExecutionContext, Future}

case class Input(name: String, input: String, sql: String, sqlFile: Option[String])

object Input {
  implicit val format: Format[Input] = Json.format
}

class Application @Inject()(implicit ws: WSClient, context: ExecutionContext) extends Controller {

  def index = Action.async {
    ws.url("https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/objects.json").get()
      .flatMap { response =>
        val x = response.json.as[List[String]].map(obj => {
          val url = s"https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/objects/${obj}.json"
          ws.url(url).get().map(_.json.as[Input])
        })
        val y = Future.sequence(x)
        y.map(yy => Ok(views.html.index("xxx", yy)))
      }
  }

  def xxxx = Action {
    Ok(views.html.test())
  }

  //  def input = Action.async {
  //    val request: WSRequest = ws.url("https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/objects.json")
  //    request.get().map { response =>
  //      println(response.json)
  //      Ok(views.html.index("oracle object details."))
  //    }
  //  }

  def setConnect() = Action { request =>
    println(request.body.asJson)
    request.body.asJson.map(_.as[Connector])
      .map(CollectingOracle.setConnect(_)).map(_ => Ok("connector set success."))
      .getOrElse(BadRequest("Expecting application/json request body"))
  }

  def query(mode: String) = Action.async { request =>
    println(request.body.asJson)
    val x: Option[QueryInfo] = request.body.asJson.map(_.as[QueryInfo])
    x.map { qi =>
      Future.successful(CollectingOracle.mode(mode, qi)).map(Ok(_))
    }.getOrElse {
      Future {
        BadRequest("Expecting application/json request body")
      }
    }
  }
}

