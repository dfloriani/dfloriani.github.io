import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.render("index.ejs")
  });

  app.get("/htmlandcss", (req, res) => {
    res.render("htmlandcss.ejs")
  });