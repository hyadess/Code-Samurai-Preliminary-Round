const path = require("path");
require("dotenv").config({
  path: `.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`,
});
const Pool = require("pg").Pool;

class Repository {
  constructor() {
    this.pool = undefined;
  }

  check = async () => {
    const result = await this.query("SELECT version();", []);
    return result;
  };
  // code to execute sql
  query = async (query, params) => {
    let result;
    // console.log(process.env.NODE_ENV, DB_HOST, process.env.DB_HOST);
    try {
      if (this.pool === undefined) {
        this.pool = new Pool({
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DB_DB,
          password: process.env.DB_PASS,
          port: process.env.DB_PORT,
        });
      }
      result = await this.pool.query(query, params);
      return {
        success: true,
        data: result.rows,
      };
    } catch (error) {
      console.log("COULD NOT CONNECT TO PG");
      console.log(error);
      console.log(query, params);
      return {
        success: false,
        error: error,
      };
    }
  };

    // code to close connection
    close = async () => {
      if (this.pool) {
        await this.pool.end();
      }
    };
}
module.exports = Repository;
