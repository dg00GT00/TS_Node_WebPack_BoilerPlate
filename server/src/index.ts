import cookieSession from "cookie-session";
import express, {Request, Response} from "express";
import {router} from "./routes/loginRoutes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['aSession']}));
app.use(router);
// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n');
});

