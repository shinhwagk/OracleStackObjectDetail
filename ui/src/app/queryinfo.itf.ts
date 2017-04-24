export interface QueryInfo {
  ci: ConnInfo;
  sqlText: string;
  parameters: string[];
}

export interface ConnInfo {
  ip:string;
  port:string;
  service:string;
  username: string;
  password: string;
}