import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel_controller.js';
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/errorHandler.js';

const router = express.Router();

router.post('/', createHotel);

router.put('/:id', updateHotel)

router.delete('/:id', deleteHotel)

router.get('/:id',getHotel)

router.get('/', getHotels)


export default router;