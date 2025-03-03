import { Router } from "express";
import {
  Books,
  getBooks,
  getBook,
  updateBook,
} from "../controller/book.controller.js";
import Book from "../models/book.model.js";

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.post("/create-book", Books);
bookRouter.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required." });
    }

    const books = await Book.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json(books);
  } catch (error) {
    console.error("Error in search route:", error); // Log the error
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
bookRouter.get("/:id", getBook);
bookRouter.patch("/:id", updateBook);

export default bookRouter;
