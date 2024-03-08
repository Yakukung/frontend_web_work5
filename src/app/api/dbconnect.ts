// dbconnect.ts
import mysql from "mysql";
import util from "util";
export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "web_work5",
  password: "",
  database: "web_work5",
});

export { mysql };

export const queryAsync = util.promisify(conn.query).bind(conn);

