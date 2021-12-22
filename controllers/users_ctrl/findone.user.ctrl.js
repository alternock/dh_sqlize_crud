const { models } = require("../../configs/database.config");


const cbFindOneUser = async (req, res) => {
  try {
    const whereEmailEQ = {
      where: {
        email: req.params.email
      }
    };

    const users = await models.Users.findOne(whereEmailEQ);
    res.json({ err: false, payload: users });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbFindOneUser