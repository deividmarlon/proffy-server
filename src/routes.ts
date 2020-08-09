import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';



const  routes = express.Router();
const ClassesControler = new ClassesController();
const ConnectionsControler = new ConnectionsController();

routes.get('/classes', ClassesControler.index);
routes.post('/classes', ClassesControler.create);

routes.get('/connections', ConnectionsControler.index);
routes.post('/connections', ConnectionsControler.create);




export default routes;

