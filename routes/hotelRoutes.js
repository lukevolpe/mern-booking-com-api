import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:id', verifyAdmin, updateHotel);

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

// GET
router.get('/find/:id', getHotel);

// GET ALL
router.get('/', getAllHotels);

// GETS COUNT OF ALL CITIES IN THE REQUEST
router.get('/countByCity', countByCity);

// GETS COUNT OF ALL TYPES IN THE REQUEST
router.get('/countByType', countByType);

// Gets all rooms within a given hotel id
router.get('/rooms/:id', getHotelRooms);

export default router;
