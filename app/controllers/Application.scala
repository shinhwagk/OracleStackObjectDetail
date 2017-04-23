package controllers

import models.{CollectingOracle, QueryInfo}
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("oracle object details."))
  }

  def query(mode: String) = Action.async { body =>
    val x: Option[QueryInfo] = body.body.asJson.map(_.as[QueryInfo])
    x.map { qi =>
      Future.successful(CollectingOracle.mode(mode, qi)).map(Ok(_))
    }.getOrElse {
      Future {
        BadRequest("Expecting application/json request body")
      }
    }
  }
}

