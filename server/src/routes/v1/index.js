const express = require('express');
const VahanController = require('../../controllers/vahan-controller');
const router = express.Router();

// Routes
router.post('/vahan',VahanController.create)
router.get('/vahan',VahanController.get)
router.delete('/vahan/:id',VahanController.destroy)
router.put('/vahan',VahanController.update)
module.exports= router;