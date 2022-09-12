import express from "express";
const app = express();

import peopleRoutes from "./routes/people";

// middleware
app.use(express.json())

app.use(peopleRoutes);
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
