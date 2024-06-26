const express = require('express');
const MongoDB = require('./config/database')
const Routes = require('./routes/Routes')
require('dotenv').config();


const app = express();
const port = 5000;
MongoDB();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(cookieParser());

app.use('/',Routes)

app.listen(port,()=> console.log(`app started running on http://localhost:${port}`))