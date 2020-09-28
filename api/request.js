export default (req, res) => {
  res.status(200).json({ headers: req.headers, dirname: __dirname });
}