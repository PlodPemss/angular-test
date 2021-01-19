module.exports = (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const sum = n1 + n2;
    res.status(200).send(`${n1} + ${n2} = ${sum}`);
  }