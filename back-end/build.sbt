name := "OracleStackObjectDetail"

version := "1.0"

scalaVersion in ThisBuild := "2.11.11"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

//lazy val `ui-prod-build` = TaskKey[Unit]("Run UI build when packaging the application.")
resolvers ++= Seq("Spray Repository" at "http://dev.rtmsoft.me/nexus/content/groups/public/")


libraryDependencies += "com.wingtech" % "ojdbc" % "7"

unmanagedResourceDirectories in Assets += (baseDirectory.value / "ui" / "dist")

sources in (Compile, doc) := Seq.empty
publishArtifact in (Compile, packageDoc) := false