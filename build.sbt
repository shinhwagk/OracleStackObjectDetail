name := "OracleStackObjectDetail"

version := "1.0"

scalaVersion in ThisBuild := "2.11.11"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies += "com.oracle" % "jdbc" % "8" from "file:///" + baseDirectory.value / "ojdbc8.jar"
libraryDependencies += "com.zaxxer" % "HikariCP" % "2.6.1"

unmanagedResourceDirectories in Assets += (baseDirectory.value / "ui" / "dist")

sources in(Compile, doc) := Seq.empty
publishArtifact in(Compile, packageDoc) := false

lazy val uiBuild = taskKey[Unit]("Run UI build when packagisbtng the application.")

val isWindows = System.getProperty("os.name").toLowerCase().contains("win")

def runScript(script: String)(implicit dir: File) = {
  if (isWindows) {
    Process("cmd /c " + script, dir).!
  } else {
    Process(script, dir).!
  }
}

uiBuild := {
  implicit val UIroot = baseDirectory.value / "ui"
  runScript("yarn install")
  runScript("yarn build")
}


dist <<= dist dependsOn uiBuild

stage <<= stage dependsOn uiBuild

