/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/invoiceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, console.log('MongoDB connected'));

// Import Routes
const productRoutes = require("./routes/productRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

app.use("/api/products", productRoutes);
app.use("/api/invoice", invoiceRoutes);

app.get('/', function(req, res) {
    console.log("hii");
    res.send("Hello from Express!"); 
});
app.listen(5000, () => console.log("Server running on port 5000"));*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/invoiceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import Routes
const productRoutes = require("./routes/productRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

app.use("/api/products", productRoutes);
app.use("/api/invoice", invoiceRoutes);

// 🟢 Serve React Build
app.use(express.static(path.join(__dirname, "./build"))); // Ensure correct path

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


