import { Router } from "express";
import { Books, getBooks , getBook, updateBook} from "../controller/book.controller.js";


const bookRouter = Router();


bookRouter.get('/' , getBooks);
bookRouter.get('/:id' , getBook);
bookRouter.post('/create-book' , Books);
bookRouter.patch('/:id' , updateBook);

    
export default bookRouter;