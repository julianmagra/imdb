import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName, email, age, gender } =
      req.body;
    const newUser = User.create({
      username,
      password,
      firstName,
      lastName,
      email,
      age,
      gender,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
