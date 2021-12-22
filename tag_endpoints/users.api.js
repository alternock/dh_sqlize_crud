const UserAPI = {
    CREATE_USER:"/user/:id/:name/:email",
    FIND_ALL_USERS:"/",
    FIND_ONE_USER:"/user/:email", 
    DELETE_ONE_USER:"/user/:email",
    UPDATE_ONE_USER:"/user/:email/:name"
};

Object.freeze(UserAPI);

module.exports = UserAPI;
