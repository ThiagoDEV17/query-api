// const express = require("express");
// const mysql = require("mysql2");

// const connection = mysql.createPool("mysql://root:mariadbpw@localhost:49153/smash");

// const app = express();

// app.use(express.json());

// app.post("/query", (req, res) => {
//     const { query, params, resource } = req.body;

//     connection.query(query, params, (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//             console.log("Filed to execute query -> " + err.message);
//         } else {
//             res.send(results);
//             console.log(`[${resource}]: Query ${query} with params ${params} was executed`);
//         }
//     });
// });

// app.listen(3000, () => console.log("Server running on port 3000"));