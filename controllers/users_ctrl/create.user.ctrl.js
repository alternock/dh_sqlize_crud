const { models } = require("../../configs/database.config");


const cbCreateUser = async (req, res) => {
  try {
    let User = {
      id: req.params.id,
      name: req.params.name,
      email: req.params.email
    };
    await models.Users.create(User);
    res.json({ err: false, payload: "user create" });
  } catch (err) {
    res.json({ err: true, payload: err });
  }
};

module.exports = cbCreateUser;