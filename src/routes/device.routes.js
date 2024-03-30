import {Router} from 'express';
import * as deviceCtrl from '../controllers/device.controller';

const router = Router();

router.get('/list',deviceCtrl.getDevices)

export default router;