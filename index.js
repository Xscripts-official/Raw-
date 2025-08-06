const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const urlPath = req.url.replace(/^\/raw\//, "");
  const filePath = path.join(__dirname, "files", urlPath);

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    return res.end("File not found");
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  fs.createReadStream(filePath).pipe(res);
};
