import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Example app listening on port 3000!");
});
