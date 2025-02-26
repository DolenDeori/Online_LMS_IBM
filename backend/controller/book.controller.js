import mongoose from "mongoose";
import Book from "../models/book.model.js";

export const Books = async (req , res ,next) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        //creating a new book
        const { name , author, releaseDate, pages, available, rating, thumbnail } = req.body;

        //if book already exist(duplicate) -> checking by name
        const existingBook = await Book.findOne({name});

        if(existingBook){
            const error = new Error('Book already exist');
            error.statusCode = 409;
            throw error;
        };


        const newBooks = await Book.create([{name , author, releaseDate, pages, available, rating, thumbnail}] , {session});


        await session.commitTransaction();
        session.endSession();


        res.status(201).json({
            success: true,
            message: "Book added successfully",
            data : {
                book: newBooks[0],
            }
        });

    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const getBooks = async (req, res, next) => {
    try{
        const books = await Book.find();    
        res.status(200).json({success:true,  data: books}); 
    }catch(error){
        next(error);
    }
}


export const getBook = async (req, res, next) => {
    try{
        const book = await Book.findById(req.params.id).select(); 
        if(!book){
            const error = new Error('Book not created');
            error.statusCode = 404
            throw error
        }   
        res.status(200).json({success:true,  data: book}); 
    }catch(error){
        next(error);
    }
}

export const updateBook = async (req, res, next) => {
    try{

        const modifiedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true});
        
        res.status(200).json({success:true ,  data: modifiedBook})
    }catch(error){
        next(error);
    }
}