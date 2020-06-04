class Router {
    constructor(app,currVersion){
        this.app = app;
        this.currentVersion = currVersion;
    }


    configureRoutes(){
        this.app.get("/version",(req,res) => {

            res.status(200).send(this.currentVersion);
        
        });

        return this.app;
    }


}

module.exports = Router;