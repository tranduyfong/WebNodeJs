const {getAllUsers, getUserById, createAnUser, handleUpdate, handleDelete} = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    res.render('Home.ejs', {listUsers: results});
}

const getCreate = (req, res) => {
    res.render('Create.ejs');
}

const getUpdate = async (req, res) => {
    const userId = req.params.userId;
    let user = await getUserById(userId);
    res.render('Update.ejs', {userEdit : user});
}
const postUpdateUser = async (req, res) => {
    let {id, name, age, phoneNumber, address} = req.body;
    await handleUpdate(id, name, age, phoneNumber, address);
    
    res.redirect('/');
}

const addNewUser = async (req, res) => {
    let { name, age, phoneNumber, address } = req.body;
    await createAnUser(name, age, phoneNumber, address);
    res.send('Them thanh cong');
}

const getDelete = async (req, res) => {
    let userId = req.params.userId;
    await handleDelete(userId);
    res.redirect('/');
}

module.exports = {
    getHomePage,
    addNewUser,
    getCreate,
    getUpdate, 
    postUpdateUser,
    getDelete
}