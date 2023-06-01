const { book } = require('../models/book');


//create a new book in Database..
exports.createBook = async (req, res) => {
    try {
        const { title, author, description, publishedYear } = req.body;
        // console.log(title, author);
        if (!title) {
            return res.json({ massage: 'title is required' })
        }
        if (!author) {
            return res.json({ massage: 'author is required' })
        }

        const newBook = await new book({
            title,
            author,
            description,
            publishedYear,
        }).save();
        res.status(201).json({
            success: true,
            massage: 'New Book has been Created!😊',
            Data: newBook

        });

    } catch (error) {
        res.status(400).json({ massage: error.massage })
    }
};


//get all book..
exports.getBooks = async (req, res) => {
    try {
        const allBook = await book.find();
        if (allBook == "") {
            return res.status(404).json({ massage: "Book list is eamty. Please create a new Book." })
        }
        res.status(200).json({
            success: true,
            massage: 'Get All Book Done!😊',
            Data: allBook
        });


    } catch (error) {
        res.status(404).json({ massage: error.massage })
    }
};

//Get a single book by id in Database..
exports.getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const singleBook = await book.findOne({ _id: id })
        console.log(singleBook)
        if (singleBook == null) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({
            success: true,
            massage: 'Get single book Done!😊',
            Data: singleBook
        })
    } catch (error) {
        // res.status(404).json({ massage: 'Book not found' })
        console.log(res.status(404).json({ massage: error.massage }))
    }
};


// updata a book by ID in database...
exports.updateSingleBook = async (req, res) => {
    try {
        const { title, author, description, publishedYear } = req.body;
        const { id } = req.params;
        const singleBookUpdate = await book.findByIdAndUpdate({ _id: id }, {
            $set: {
                title,
                author,
                description,
                publishedYear
            }
        }, {
            new: true
        });
        res.status(200).json({
            success: true,
            massage: 'Single book has been Updated!😊😊',
            Data: singleBookUpdate
        })

    } catch (error) {
        res.status(401).json({ massage: error.massage })
    }
};

//delete a single book by id in Database..
exports.deleteSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSingleBook = await book.findByIdAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            massage: 'Single book has been Deleted!😊😊',
            Data: deleteSingleBook
        })
    } catch (error) {
        res.status(404).json({ massage: error.massage })
    }
};