module.exports = (req, res) => {
  const date = Date.now().prototype.toDateString();
  res.status(200).send(`Date : ${date}`);
}