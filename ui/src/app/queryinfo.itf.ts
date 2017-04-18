export interface QueryInfo {
  ci: ConnInfo;
  sqlText: string;
  parameters: string[];
}

export interface ConnInfo {
  jdbcUrl: string;
  username: string;
  password: string;
}