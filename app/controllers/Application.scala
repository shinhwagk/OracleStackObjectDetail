package controllers

import controllers.Assets.Asset
import play.api.mvc._

/**
  * Created by zhangxu on 2016/12/5.
  */
class Application extends Controller {

  def index = Action {
    Redirect("/index.html")
  }

  def genConnecString(dci: DatabaseConnectInfo): String = {
    s"${dci.ip}:${dci.port}/${dci.service}"
  }

}

case class DatabaseConnectInfo(ip: String, port: Int, service: String, user: String, password: String)