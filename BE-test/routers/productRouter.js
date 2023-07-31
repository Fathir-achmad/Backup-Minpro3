const router = require('express').Router();
const { productController } = require('../controllers');
const { checkCreateProduct, checkUpdateProduct, checkDeactiveProduct, checkProductExist } = require('../middleware/productValidator');
const { checkCategoryExist } = require('../middleware/categoryValidator');
const { multerUpload } = require('../middleware/multer')

router.get('/', productController.allProduct);
router.post('/',multerUpload('./public/product', 'product').single('file'), checkCreateProduct, productController.createProduct);
router.patch('/:id',checkProductExist, multerUpload('./public/product', 'product').single('file'),checkUpdateProduct, productController.updateProduct);
router.delete('/deactivate/:id', checkProductExist, checkDeactiveProduct, productController.deactiveProduct);





module.exports = router;