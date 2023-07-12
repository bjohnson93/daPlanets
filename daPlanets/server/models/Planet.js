import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  biome: { type: String, required: true, maxlength: 30 },
  atmosphere: { type: Boolean, default: false },
  galaxyId: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })