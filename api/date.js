module.exports = (req, res) => {
  const date = Date.now();
  const dateString = date.toDateString();
  res.status(200).send(`Date : ${date}`);
}