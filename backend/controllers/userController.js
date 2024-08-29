const db = require('../models/db');

exports.signup = (req, res) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};


exports.login = (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("error");
        }
        if (data.length > 0) {
            return res.json("success");
        } else {
            return res.json("Failed");
        }
    });
};
