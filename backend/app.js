const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
connectToDB();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", taskRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
