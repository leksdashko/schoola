require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const router = require('./routes');
//const errorHandler = require('./middleware/ErrorHandingMiddleware');
const path = require('path');
const errorMiddleware = require('./middleware/error-middleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorMiddleware);

//it's the last middleware
//app.use(errorHandler);

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();