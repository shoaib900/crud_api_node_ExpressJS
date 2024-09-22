const User = require("../model/userModel");

const addUser = async (req, res) => {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
    return res.status(201).json({ message: "User created successfully" });
};

const updateUser= async (req,res)=> {
    const id = req.params.id;
    await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(201).json({ message: "User updated successfully" });
}
const deleteUser=async (req,res)=> {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
}
const getAllUsers= async (req,res)=> {
    const users = await User.find();
     return res.status(200).json(users);
}

module.exports = { addUser,getAllUsers,updateUser,deleteUser };
