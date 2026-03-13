import mongoose, { Schema, model, models } from "mongoose";

const SupplierSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
    },

    location: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Supplier =
  models.Supplier || model("Supplier", SupplierSchema);