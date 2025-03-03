import { Router } from "express";

import {
  borrowBook,
  deleteBorrowedBook,
  getBorrowedBooks,
} from "../controller/borrow.controller.js";

const borrowRouter = Router();

// Route to borrow a book
borrowRouter.post("/borrow", borrowBook);
borrowRouter.get("/borrowed/:user_id", getBorrowedBooks);
borrowRouter.delete("/borrowed/:user_id/:book_id", deleteBorrowedBook);

export default borrowRouter;
