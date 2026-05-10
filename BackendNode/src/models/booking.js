import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  phone: String,

  customerName: String,

  activity: String,

  persons: Number,

  bookingDate: String,

  bookingTime: String,

  language: String,

  status: {
    type: String,
    default: "pending"
  }

}, {
  timestamps: true
});

export default mongoose.model(
  "Booking",
  bookingSchema
);