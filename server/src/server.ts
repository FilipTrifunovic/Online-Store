import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './router/productRouter';
import morgan from 'morgan';



class Server {

    public app;

    constructor() {
        this.app=express();
        this.config();
        this.routes();
        this.server();
    } 
       public config(){
           const MONGO_URL='mongodb://localhost:27017/DataBase';
           mongoose.connect(MONGO_URL || process.env.MONGO_URL,(err)=>{
               if(err) throw err;
            console.log(`Connected`);
           })
           this.app.use(bodyParser.urlencoded({extended:false}));
           this.app.use(bodyParser.json());
           this.app.use(cors({ origin: 'http://localhost:4200' }));
           this.app.use(morgan('dev'));
       }

       public routes():void{
           let router:express.Router;
           router=express.Router();

           this.app.use('/',router);
           this.app.use('/products',productRouter);
           
       }
       public server(){
           this.app.listen(4000,(err)=>{
               if(err) throw err;
               console.log('server radi na portu 4000');
           })
       }
}

export default new Server().app;