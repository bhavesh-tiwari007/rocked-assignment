const express = require('express');
const app = express();
const dotenv = require('dotenv');
require('./db/db');
dotenv.config();
const rosterRouter = require('./routes/rosterRoutes');
const campaignRouter = require('./routes/campaignsRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const dealershipRouter = require('./routes/dealershipRoutes');
const topicRouter = require('./routes/topicRoutes');

app.use(require('body-parser').json());
app.use(rosterRouter);
app.use(campaignRouter);
app.use(employeeRouter);
app.use(dealershipRouter);
app.use(topicRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
