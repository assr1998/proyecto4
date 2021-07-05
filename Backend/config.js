require('dotenv').config();

module.exports = {
    database: {
        host:DB_SERVER,
        dialect:"mysql"
        port: process.env.DB_PORT, 
        username: "root",
        password: "", 
        database: data_warehouse
     }
}
