const express = require("express");
const morgan = require("morgan");

const todoRoute = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.use(morgan("tiny"));
app.use(todoRoute);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
