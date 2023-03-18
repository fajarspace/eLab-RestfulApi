import express from "express";
import { getJadwal, getJadwalById, createJadwal, updateJadwal, deleteJadwal } from "../controller/Jadwal.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router()

// CREATE - POST
router.post('/jadwal', verifyUser, createJadwal)

// READ - GET
router.get('/jadwal', verifyUser, getJadwal)

// READ - GET by id
router.get('/jadwal/:id', verifyUser, getJadwalById)

// UPDATE - PATCH
router.patch('/jadwal/:id', verifyUser, updateJadwal)

// DELETE
router.delete('/jadwal/:id', verifyUser, deleteJadwal)

export default router;