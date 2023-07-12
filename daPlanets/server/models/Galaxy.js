import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  stars: { type: Number, required: true, min: 0, max: 500 }
}, { timestamps: true, toJSON: { virtuals: true } })