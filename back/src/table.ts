import * as oracledb from 'oracledb';

import { genConnection, DatabaseConnectInfo } from './db';

export async function index(ctx) {
  const pars: string[] = ctx.request.body.pars
  const conn = await genConnection({ ip: '10.65.193.11', port: 1521, service: 'whpay', user: 'system', password: 'oracle1171' })
  const result = await conn.execute("select * from dba_tables where owner = :0 and table_name = :1", pars)
  ctx.body = JSON.stringify(result)
  conn.close()
}