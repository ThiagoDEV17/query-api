const express = require("express");
const mysql = require("mysql2");
const moment = require("moment");
require("colors");

const connection = mysql.createPool("mysql://root:mariadbpw@localhost:49153/pvp");

const app = express();

app.use(express.json());

app.post("/query", (req, res) => {
    const { query, params, resource } = req.body;

    connection.query(query, params, (error, results) => {
        if (error) {
            res.status(500).send(error);
            console.log("[" + moment().format("DD-MM-YYYY HH:MM") + "]" + "[" + resource + "]" + ":" + "Filed to execute query " + error.message.underline.red);
        } else {
            res.send(results);
            console.log("[" + moment().format("DD-MM-YYYY HH:MM") + "]" + "[" + resource + "]" + ":" + "Query " + query.underline.green + " with params " + JSON.stringify(params).underline.green + " executed successfully");
        }
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));