const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const branchRoutes = require('./routes/branchRoutes');

// change api url custon to use this formate
// app.use("/api/users", userRoutes);
// app.use("/api/categories", categoryRoutes);

app.use( userRoutes);
app.use( categoryRoutes);
app.use( branchRoutes);

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
