import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// USER AUTH CHECKS

router.get('/verifyauth', verifyToken, (req, res, next) => {
  res.json('Hello user, you are logged in');
});

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.json('Hello user, you are logged in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.json('Hello admin, you are logged in and you can delete all accounts');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getAllUsers);

export default router;
