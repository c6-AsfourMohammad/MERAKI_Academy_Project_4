const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import Routers

const usersRouter=require("./routes/user");
const loginRouter = require("./routes/login");
const rolesRouter=require("./routes/roles");

// Routes Middleware
app.use("/users",usersRouter);
app.use("/roles",rolesRouter);
app.use("/login", loginRouter);


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
