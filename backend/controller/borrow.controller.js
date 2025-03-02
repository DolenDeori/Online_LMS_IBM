import Book from "../models/book.model.js";
import BorrowedBook from "../models/borrowedBook.model.js";
import mongoose from "mongoose";


//create the borrowed book api route
export const borrowBook = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { user_id, book_id } = req.body;

        // Check if the user has already borrowed the book
        const existingBorrow = await BorrowedBook.findOne({ user_id, book_id });

        if (existingBorrow) {
            return res.status(409).json({ message: "You have already borrowed this book." });
        }

        // Set issue date and return date (30 days later)
        const issuedate = new Date();
        const returndate = new Date();
        returndate.setDate(issuedate.getDate() + 30);

        // Get book details (optional, useful for dashboard)
        const bookDetails = await Book.findById(book_id);
        if (!bookDetails) {
            return res.status(404).json({ message: "Book not found." });
        }

        // Save borrowed book record
        const newBorrow = new BorrowedBook({
            user_id,
            book_id,
            issuedate,
            returndate,
            // bookPdf: bookDetails.bookPdf // Linking the PDF URL from book collection
        });

        await newBorrow.save();

        res.status(201).json({
            message: "Book borrowed successfully",
            borrowedBook: newBorrow
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//get the borrowed book api route

export const getBorrowedBooks = async (req, res) => {
    try {
        const { user_id } = req.params;

        // Find all borrowed books by user
        const borrowedBooks = await BorrowedBook.find({ user_id }).populate("book_id");

        res.status(200).json(borrowedBooks);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
