import express from "express";
const app = express();

import indexRoutes from "./routes/index";

// middleware
app.use(express.json())

app.use(indexRoutes);
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
