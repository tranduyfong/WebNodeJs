const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const createAnUser = async (name, age, phoneNumber, address) => {
    let [results, fields] = await connection.query(`INSERT INTO Users (name, age, phone_number, address) VALUES
        (?, ?, ?, ?)`, [name, age, phoneNumber, address]);
}

const handleUpdate = async (currentId, name, age, phoneNumber, address) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET name = ?, age = ?, phone_number = ?, address = ? 
        WHERE id = ?`
        , [name, age, phoneNumber, address, currentId]);
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const handleDelete = async (userId) => {
    let [results, fields] = await connection.query('delete from Users where id = ?', [userId]);
}



module.exports = {
    getAllUsers,
    createAnUser,
    getUserById,
    handleUpdate,
    handleDelete
}