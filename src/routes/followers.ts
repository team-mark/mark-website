import * as express from 'express';
import { localconfig } from '../utils';
const router = express.Router();
module.exports = router;

// Routes
router.get('/', index);

// Route definitions
function index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.render('followers', {
        title: 'Mark Followers',
        pageScript: 'followers',
        pageStyle: 'followers',
        environment: JSON.stringify(localconfig.getLocalConfig())
    });
}