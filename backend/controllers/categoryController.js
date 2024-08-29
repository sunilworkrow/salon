const db = require('../models/db');

exports.addCategory = (req, res) => {
    const sql = "INSERT INTO category (name) VALUES (?)";
    const values = [req.body.name];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.getCategories = (req, res) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.deleteCategory = (req, res) => {
    const sql = "DELETE FROM category WHERE id = ?";
    const value = [req.params.id];

    db.query(sql, value, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.getCategoryById = (req, res) => {
    const sql = "SELECT * FROM category WHERE id = ?";
    const values = [req.params.id];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
};

exports.updateCategory = (req, res) => {
    const sql = "UPDATE category SET name = ? WHERE id = ?";
    const values = [req.body.name, req.params.id];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json("error");
        }
        return res.status(200).json("Category updated successfully");
    });
};
