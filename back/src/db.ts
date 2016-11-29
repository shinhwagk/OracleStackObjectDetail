import * as oracledb from "oracledb";

export interface DatabaseConnectInfo {
  ip: string;
  port: number;
  service: string;
  user: string;
  password: string;
}

function genConnecString(dci: DatabaseConnectInfo): string {
  return `${dci.ip}:${dci.port}/${dci.service}`
}

export function genConnection(dci: DatabaseConnectInfo): oracledb.IPromise<oracledb.IConnection> {
  return oracledb.getConnection({ user: dci.user, password: dci.password, connectString: genConnecString(dci) })
}