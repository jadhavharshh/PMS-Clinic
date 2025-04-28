import express, { json, urlencoded } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Server is up and running!");
});

app.listen(PORT, () => {
  console.log(`⚡️ Server listening on http://localhost:${PORT}`);
});
