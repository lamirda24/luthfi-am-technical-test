var express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const postgre = require("./db");

const port = 8080;
var app = express();
const cors = require("cors");

const corsOptions = {
  AccessControlAllowOrigin: "*",
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/getDataUser/:id", async (req, res) => {
  switch (req.params.id) {
    case "all":
      try {
        const { rows } = await postgre.query("select * from tbl_user");

        res.json({ msg: "OK", data: rows });
      } catch (error) {
        res.json({ msg: error.msg });
      }
      break;
    default:
      try {
        const { rows } = await postgre.query("select * from tbl_user where userid = $1", [req.params.id]);
        if (rows[0]) {
          return res.json({ msg: "OK", data: rows[0] });
        }
        res.status(404).json({ msg: "not found" });
      } catch (error) {
        res.json({ msg: error.msg });
      }
      break;
  }
});

app.post("/setDataUser", async (req, res) => {
  try {
    const { namalengkap, username, password, status } = req.body;
    const sql = "INSERT INTO tbl_user(namalengkap, username,password,status) VALUES($1,$2,$3,$4) RETURNING *";
    const { rows } = await postgre.query(sql, [namalengkap, username, password, status]);
    res.json({ msg: "OK", data: rows[0] });
  } catch (error) {
    res.json({ msg: error.msg });
  }
});

app.delete("/delDataUser/:id", async (req, res) => {
  try {
    const sql = "DELETE FROM tbl_user where userid = $1 RETURNING *";
    const { rows } = await postgre.query(sql, [req.params.id]);
    if (rows[0]) {
      return res.json({ msg: "OK", data: rows[0] });
    }
    return res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.json({ msg: error.msg });
  }
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
