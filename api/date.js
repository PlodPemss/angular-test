module.exports = (req, res) => {
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);
  const dateString = currentDate.toDateString();
  res.status(200).send(`Date : ${dateString}`);
}