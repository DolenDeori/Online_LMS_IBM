import mongoose from "mongoose";
import Book from "../models/book.model.js";

// CREATE A NEW BOOK
export const Books = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, author, releaseDate, pages, available, rating, thumbnail } = req.body;

        // Check if book already exists by name
        const existingBook = await Book.findOne({ name });

        if (existingBook) {
            const error = new Error("Book already exists");
            error.statusCode = 409;
            throw error;
        }

        // Create a new book
        const newBooks = await Book.create([{ name, author, releaseDate, pages, available, rating, thumbnail }], { session });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: {
                _id: newBooks[0]._id,
                title: newBooks[0].name,         // Rename 'name' to 'title'
                author: newBooks[0].author,
                publishDate: newBooks[0].releaseDate, // Rename 'releaseDate' to 'publishDate'
                pages: newBooks[0].pages,
                available: newBooks[0].available,
                starReview: newBooks[0].rating,  // Rename 'rating' to 'starReview'
                coverImage: newBooks[0].thumbnail // Rename 'thumbnail' to 'coverImage'
            }
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

// GET ALL BOOKS 
export const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        const formattedBooks = books.map(book => ({
            _id: book._id,
            title: book.name,         // Rename 'name' to 'title'
            author: book.author,
            publishDate: book.releaseDate, // Rename 'releaseDate' to 'publishDate'
            pages: book.pages,
            available: book.available,
            starReview: book.rating,  // Rename 'rating' to 'starReview'
            coverImage: book.thumbnail // Rename 'thumbnail' to 'coverImage'
        }));

        res.status(200).json({ success: true, data: formattedBooks });

    } catch (error) {
        next(error);
    }
};

// GET A SINGLE BOOK BY ID 
export const getBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            const error = new Error("Book not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: {
                _id: book._id,
                title: book.name,         
                author: book.author,
                publishDate: book.releaseDate,
                pages: book.pages,
                available: book.available,
                starReview: book.rating,
                coverImage: book.thumbnail
            }
        });

    } catch (error) {
        next(error);
    }
};

// UPDATE A BOOK 
export const updateBook = async (req, res, next) => {
    try {
        const updateFields = {
            name: req.body.title,        // Map 'title' to 'name'
            author: req.body.author,
            releaseDate: req.body.publishDate, // Map 'publishDate' to 'releaseDate'
            pages: req.body.pages,
            available: req.body.available,
            rating: req.body.starReview,  // Map 'starReview' to 'rating'
            thumbnail: req.body.coverImage // Map 'coverImage' to 'thumbnail'
        };

        const modifiedBook = await Book.findByIdAndUpdate(
            req.params.id,
            updateFields, // Use mapped fields
            { new: true, runValidators: true } // Return updated book
        );

        if (!modifiedBook) {
            const error = new Error("Book not found");
            error.statusCode = 404;
            throw error;
        }

        // Transform response to match frontend expectations
        res.status(200).json({
            success: true,
            data: {
                _id: modifiedBook._id,
                title: modifiedBook.name,         
                author: modifiedBook.author,
                publishDate: modifiedBook.releaseDate,
                pages: modifiedBook.pages,
                available: modifiedBook.available,
                starReview: modifiedBook.rating,
                coverImage: modifiedBook.thumbnail
            }
        });

    } catch (error) {
        next(error);
    }
};
