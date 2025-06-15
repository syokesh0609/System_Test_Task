require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const db = require("./config/db");

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/upload-csv", require("./routes/uploadCsv"));
app.use("/users", require("./routes/userRoutes"));
app.use("/login", require("./routes/authRoutes"));
app.use("/products", require("./routes/productRoutes"));

const PORT = 3000;
app.listen(PORT, async () => {
  await db.sync();
  console.log(`Server running on port ${PORT}`);
});