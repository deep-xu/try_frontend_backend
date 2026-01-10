import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch(err) {
        console.log('something went wrong in controller book')
        res.status(500).json(err)
    }
}