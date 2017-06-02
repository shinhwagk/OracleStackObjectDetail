name := "oracle-stack-object-detail"

organization := "org.shinhwagk"

version := "1.0-SNAPSHOT"

scalaVersion in ThisBuild := "2.11.11"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies += filters

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "2.0.0" % Test

fork in run := true