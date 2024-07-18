import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [{ 
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      },
      seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
      },
    }],
    totalAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered'],
      default: 'pending'
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Order", OrderSchema);
