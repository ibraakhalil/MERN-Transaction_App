require('dotenv').config()
const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

mongoose.set("strictQuery", false);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => {
        console.log('Connected to MongoDB');
    }
);

