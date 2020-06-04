let expect = require("chai").expect;
let Router = require("../router");

function Res(){
	this.body = {};
	this.send = (text)=>{
		return text;
	}
	this.status = (code)=>{
		return this;
	}
	this.sendStatus = (code)=>{
		return code;
	}

	this.json = (json)=>{
		return json;
	}
}

describe("router.js",()=>{


    describe("configureRoutes()",()=>{


        it("expects routes to start with '/' ", ()=>{

            let res = new Res();

            let app = {
                routes: [],
            
                get: function(route, method){
            
                    this.routes.push(route);
                    
                    return method({},res);
                }
            };
            

            let router = new Router(app,"");
            let appObject  = router.configureRoutes();
            for(let i=0;i<appObject.routes.length;i++){
                expect(app.routes[i][0]).to.equal("/");
            }

        });
            
    });

});