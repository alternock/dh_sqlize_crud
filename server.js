const multer = require("multer");
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
//controllers
const cbCreateUser = require("./controllers/users_ctrl/create.user.ctrl");
const cbFindAllUsers = require("./controllers/users_ctrl/findall.users.ctrl");
const cbFindOneUser = require("./controllers/users_ctrl/findone.user.ctrl");
const cbDeleteOneUser = require("./controllers/users_ctrl/deleteone.user.ctrl");
const cbUpdateOneUser = require("./controllers/users_ctrl/updateone.user.ctrl");
//tag endpoints
const UserAPI = require("./tag_endpoints/users.api");

//app
const app = express();

//sequelize config
const { fnUtils } = require("./configs/database.config");

fnUtils.checkSqlize();
fnUtils.UsersSyncDB(false);

//settings
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(cors());
app.use(methodOverride());


//endpoints
app.post(UserAPI.CREATE_USER, cbCreateUser);
app.get(UserAPI.FIND_ALL_USERS, cbFindAllUsers);
app.get(UserAPI.FIND_ONE_USER, cbFindOneUser);
app.delete(UserAPI.DELETE_ONE_USER, cbDeleteOneUser);
app.put(UserAPI.UPDATE_ONE_USER, cbUpdateOneUser);


//listen port
app.listen(3000, () => {
  console.log("start server");
});
