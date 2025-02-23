import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ProductController } from './controller';
import { ProductService } from '../services/product.services';



export class ProductRoutes {


    static get routes(): Router {

        const router = Router();
        const productServices = new ProductService();
        const controller = new ProductController(productServices);

        // Definir las rutas
        router.get('/', controller.getProducts );
        router.post('/', [ AuthMiddleware.validatJWT ],controller.createProduct );



        return router;
    }


}

