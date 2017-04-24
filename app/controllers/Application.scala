package controllers

import models.{CollectingOracle, Connector, QueryInfo}
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("oracle object details."))
  }

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

