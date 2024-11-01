import express from "express";
import path from "path"

const PORT = 8080

const app = express()

app.use(express.static(path.resolve("public")))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
