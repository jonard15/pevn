const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path")
const PORT = process.env.PORT || 5000

//process .env.PORT
//process .env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/dist")))
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "client/dist")))
}
console.log(__dirname)
console.log(path.join(__dirname, "client/dist"))

//Routes

//get all users
app.get("/users", async(req, res) => {
    try {
        const allusers = await pool.query("SELECT * FROM users");
        res.json(allusers.rows);
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});