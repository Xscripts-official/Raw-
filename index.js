const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const filePath = path.join(__dirname, "files", "main.txt");

  if (!fs.existsSync(filePath)) {
    res.statusCode = 500;
    return res.end("main.txt not found");
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  fs.createReadStream(filePath).pipe(res);
};
