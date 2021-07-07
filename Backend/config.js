require('dotenv').config();

module.exports = {
    database: {
        port: process.env.DB_PORT,
        username: "root",
        password: "",
        database: "data_warehouse",
        host: "localhost"
     }
}
