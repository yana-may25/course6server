import express from 'express';
import UserService from "../services/userService";

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    const { loginSubstring = '' } = req.query;
    const users = await UserService.getAllUsers(loginSubstring as string);

    if (!users.length) {
      return res.status(404).send('There are no users');
    }

    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);

    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

userRouter.post('/', async (req, res) => {
  const user = req.body;
  try {
    const addedUser = await UserService.addUser(user);
    return res.status(200).json(addedUser);
  } catch (err) {
    res.status(500).json({ mesage: err.mesage });
  }
});
//my
userRouter.post('/update', async (req, res) => {
  const {login, codeWord, password} = req.body;
  try {
    console.log(login, codeWord, password);
    const user = await UserService.updateUser(login, codeWord, password);
    if (!user) return res.status(404).json({ mesage: 'User not found' });
    return res.status(200).json(user);
  } catch (err) {
  
    console.log(err);
    res.status(500).json({ mesage: err.mesage });
  }
});

// userRouter.delete('/:id', async (req, res) => {
//   try {
//     const deletedUser = await UserService.deleteUser(req.params.id);

//     if (!deletedUser) {
//       return res.status(404).json({mesage: 'User not found'});
//     }

//     return res.status(200).json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


export default userRouter;
