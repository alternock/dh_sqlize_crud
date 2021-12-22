const { models } = require("../../configs/database.config");


const cbDeleteOneUser = async (req, res) => {
  try {
    const whereEmailEQ = {
      where: {
        email: req.params.email
      }
    };

    await models.Users.destroy(whereEmailEQ);
    res.json({ err: false, payload: "delete user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbDeleteOneUser;