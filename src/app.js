const express = require("express") / require("dotenev").config();
const dotenv = require("dotenv");
dotenv.config();
const apiRoutes = require("./routes");
const Sequelize = require("sequelize");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "My APP server is healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.use("/api", apiRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("🛢️  Database authenticated");

    // start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.error("Error authenticating database");
  });
