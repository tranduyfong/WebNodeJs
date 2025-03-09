const express = require('express');
const {getHomePage, addNewUser, getCreate, getUpdate, postUpdateUser, getDelete} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.post('/create-user', addNewUser);
router.get('/create', getCreate);

router.get('/update/:userId', getUpdate);
router.post('/update-user', postUpdateUser);

router.get('/delete/:userId', getDelete);

module.exports = router;