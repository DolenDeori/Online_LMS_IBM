import { Router } from "express";

import { borrowBook, getBorrowedBooks } from "../controller/borrow.controller.js";

const borrowRouter = Router();

// Route to borrow a book
borrowRouter.post("/borrow", borrowBook);
borrowRouter.get("/borrowed/:user_id" , getBorrowedBooks);

export default borrowRouter;