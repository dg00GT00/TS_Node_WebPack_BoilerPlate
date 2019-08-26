import express from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";

import {AppRouter} from "./routes/AppRouter";
import "./controllers/loginController";
import './controllers/rootController'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['aSession']}));
app.use(AppRouter.getInstance());


// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n');
});

