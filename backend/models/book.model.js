import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    thumbnail: {
      //url of the image
      type: String,
      required: true,
    },
    pdf_file: {
      type: String,
      required: true,
    },
    category: { type: String, required: true, trim: true },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
