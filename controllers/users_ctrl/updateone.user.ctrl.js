const { models } = require("../../configs/database.config");


const cbUpdateOneUser = async (req, res) => {
  try {
    const whereEmailEQ = {
      where: {
        email: req.params.email
      }
    };

    const nameChange = {
      name: req.params.name
    };

    await models.Users.update(nameChange, whereEmailEQ);
    res.json({ err: false, payload: "update user true" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbUpdateOneUser;
