package org.shinhwagk

import org.yaml.snakeyaml.Yaml

import scala.beans.BeanProperty
import scala.io.Source

/**
  * Created by zhangxu on 2016/12/6.
  */
object Test extends App {
  private val _path_conf = "conf"
  private val _sql_file_path_conf = s"""${_path_conf}/objects.yaml"""

  val yaml = new Yaml
  val test = yaml.load(Source.fromFile(_sql_file_path_conf).mkString).asInstanceOf[java.util.Map[String, Any]]
  println(test.)
}

class EmailAccount {
  @BeanProperty var objects: String = null
}
class Table {
  @BeanProperty var objects: String = null
}