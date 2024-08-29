const db = require('../models/db');

exports.addBranch = (req, res) => {
    
    const sql = "INSERT INTO branch (name) VALUES (?)";
    const values = [req.body.name];

    db.query(sql, [values], (err,data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.getbranches = (req, res) => {
    const sql = "SELECT * FROM branch";

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.deleteBranch = (req, res) => {
    const sql = 'SELECT FROM branch WHERE id = ?';
    const values = [req.params.id];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    })
}

