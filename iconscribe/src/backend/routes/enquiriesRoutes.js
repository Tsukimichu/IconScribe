
import express from 'express';
import Enquiry from '../models/enquiriesModel.js'; 
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json(newEnquiry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
