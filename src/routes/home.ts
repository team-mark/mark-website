import * as express from 'express';
const router = express.Router();
module.exports = router;

// Routes
router.get('/', index);

// Route definitions
function index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.render('home', {
        title: 'Mark Home',
        pageScript: 'home',
        pageStyle: 'home'
    });
}