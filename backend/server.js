const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connaction

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "salon"
});

// SEND DATA IN DATABASE

app.post("/signup", (req, res) => {

    const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];

    db.query(sql, [values], (err, data) => {

        if (err) {
            return res.json("error");
        }
        return res.json(data);
    })

})

// LOGIN data in login form

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.email, req.body.password], (err,data) => {
        if (err){
            return res.json("error");
        }

        if(data.length > 0) {
            return res.json("success");
        }
        else {
            return res.json("Faild");
        }
    })

})


// add category in data base

app.post("/add-category", (req, res) => {

    const sql = "INSERT INTO category (`name`) VALUES (?)";

    const values = [req.body.name];

    db.query(sql, [values], (err, data) => {

        if (err) {
            return res.json("error");
        }
        return res.json(data);
       
    });

});

//get all categorys
app.get('/get-categorys', (req, res) => {

    const sql = "SELECT * FROM category";

    db.query(sql, (err,data) => {

        if (err){
            return res.json("error");
        }

        return res.json(data);
    });
});

// delete category 

app.delete("/delete-category/:id", (req, res) => {

    const sql = "DELETE FROM category WHERE id =?";

    const value =  [req.params.id];

    db.query(sql, value, (err, data) => {
        
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
});

// update category

app.get('/get-categorys/:id', (req, res) => {
    const sql = "SELECT * FROM category WHERE id = ?";
    const values = [req.params.id];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
});


// Update category by ID
app.put('/update-category/:id', (req, res) => {
    const sql = "UPDATE category SET name = ? WHERE id = ?";
    const values = [req.body.name, req.params.id];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json("error");
        }
        return res.status(200).json("Category updated successfully");
    });
});




app.listen(8081, () => {
    console.log("I am connected to the database");
});
