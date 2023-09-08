import mongoose, { Schema, model, Types } from "mongoose";

const citySchema = Schema(
  {
    name: { type: String, default: "Titulo por defecto" },
    country: { type: String, required: true },
    flag: { type: String, required: true },
    image: { type: String, required: true },
    imageCover: { type: String },
    description: { type: String, required: true },
    itinerary: {
      type: [{ type: Types.ObjectId, ref: "itinerary" }],
    },
  },
  {
    timestamps: true,
  }
);

const itinerarySchema = new Schema(
  {
    excursion_price: { type: Number},
    namePublicity: { type: String},
    photoPublicity: { type: String},
    duration: { type: String},
    likes: { type: String },
    hashtags: {
      type: [{ type: String }],
    },
  },
  {
    timestamps: true,
  }
);



const City = model("city", citySchema);
const Itinerary = model("itinerary", itinerarySchema);

export  {City, Itinerary}
