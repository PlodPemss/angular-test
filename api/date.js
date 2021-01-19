module.exports = (req, res) => {
  const date = Date.now().toDateString();
  res.status(200).send(`Date : ${date}`);
}