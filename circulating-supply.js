module.exports = (req, res) => {
  res.status(200).json({
    circulating_supply: 2500000,
    verified_on: "jupiter"
  });
};
