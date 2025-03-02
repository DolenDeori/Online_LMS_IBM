import mongoose from 'mongoose';
import User from './user.model.js';
import Book from './book.model.js';


const borrowedBookSchema = new mongoose.Schema(
    {
        user_id: {  
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true,
        },
        book_id: {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        issuedate: {
            type: Date,
            default: Date.now 
        },
        returndate: {
            type: Date,
            default: function () {  
                return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); 
            }
        },
        bookPdf: {  
            type: String
        }
    },
    { timestamps: true }
);

// Prevent duplicate borrowing of the same book by the same user
borrowedBookSchema.index({ user_id: 1, book_id: 1 }, { unique: true });

const BorrowedBook = mongoose.model("BorrowedBook", borrowedBookSchema);

export default BorrowedBook;