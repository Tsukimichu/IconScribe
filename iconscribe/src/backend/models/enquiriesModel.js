import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  businessName: String,
  contactNumber: String,
  location: String,
  message: String,
  service: String,
  date: String,
}, { timestamps: true });

export default mongoose.model('Enquiry', enquirySchema);
