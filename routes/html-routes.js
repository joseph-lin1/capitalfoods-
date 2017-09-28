module.exports = (express,passport,db,bcrypt)=>{
    
    // Sets up the Express Router
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    router.route('/')
        .get((req,res,next)=>{
            res.render('index',{
                home: 'active'
            })
        });

    router.route('/products/:product?')
        .get((req,res,next)=>{
            if(req.params.product=='abcafe'||req.params.product=='nora'||req.params.product=='goldencoins'||req.params.product=='meiwei'){
                
                switch(req.params.product){
                    case 'abcafe':
                        res.render('abcafe',{
                            products:'active',
                            abcafe:'active'
                        });
                        break;
                    case 'nora':
                        res.render('nora',{
                            products:'active',
                            nora:'active'
                        });
                        break;
                    case 'goldencoins':
                        res.render('goldencoins',{
                            products:'active',
                            goldencoins:'active'
                        });
                        break;
                    case 'meiwei':
                        res.render('meiwei',{
                            products:'active',
                            meiwei:'active'
                        });
                        break;
                }

            } else {

                if(req.params.product){
                    res.redirect('/products');
                } else {
                    res.render('products',{
                        products:'active'
                    });
                }
                
            }
        });

    router.route('/about')
        .get((req,res,next)=>{
            res.render('about',{
                about:'active'
            });
        });
    
    router.route('/contact')
        .get((req,res,next)=>{
            res.render('contact',{
                contact:'active'
            });
        });

    return router;
};