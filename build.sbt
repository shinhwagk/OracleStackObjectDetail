name := "OracleStackObjectDetail-Back"

version := "1.0"

scalaVersion := "2.11.8"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers ++= Seq("Spray Repository" at "http://dev.rtmsoft.me/nexus/content/groups/public/")

libraryDependencies ++= Seq(
  "com.wingtech" % "ojdbc" % "7"
)

unmanagedResourceDirectories in Assets += (baseDirectory.value / "frontend" / "dist")