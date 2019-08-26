import {NextFunction, Request, Response} from "express";
import {bodyValidator, controller, get, post, use} from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('Request was made!!!');
    next();
}

@controller('/auth')
class LoginController {
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="post">
            <div>
                <label for="email">Email</label>
                <input type="text" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password">
            </div>
                <button>Submit</button>
            </form>
        `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        if (email && password && email === 'hi@hi.com' && password === 'password') {
            // mark this person as logged in
            req.session = {loggedIn: true};
            // redirect them to the root route
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }

}
