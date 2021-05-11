import express from 'express';
import UserService from '../services/userService';

const mainRouter = express.Router();

mainRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);
  try {
    const  user = await UserService.loginUser(login, password);
    
    if (!user) {
      return res.status(401).json('Not authorized');
    }
        
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ mesage: err.mesage });
  }
});

export default mainRouter;