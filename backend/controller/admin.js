const Admin = require("../model/adminModel");

// create admin

const createAdmin = async (req, res) => {
    const {email, password} = req.body
    const admin = await Admin.create({email, password})
    res.json(admin)
}

module.exports = {createAdmin}