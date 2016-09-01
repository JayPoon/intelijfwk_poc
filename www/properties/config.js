
/* JavaScript content from scripts/config.js in folder common */
(function(_window){
    var g_angularModule = 'imfw'
    var config={
        meta:{
            ns:{
                module : g_angularModule,
                controllers : g_angularModule + '.controllers',
                services : g_angularModule + '.services',
                directives : g_angularModule + '.directives',
                states : g_angularModule + '.states'
            }
        },
        root:"",
        base_url:"http://jaypoon-intellijfwkpoc.daoapp.io",
        //backend接口
        backends:"http://jaypoon-intellijfwkpoc.daoapp.io",
         //http访问地址
        html_path:"",
         //默认资源存放位置
        template_path:"",
        //js存放位置
        js_path:"",
        //css存放位置
        css_path:"",
        /*ajax远程请求地址*/
        remote_url:"",
        //默认定义参数
        timestmpt:"",
        img_path:"http://jaypoon-intellijfwkpoc.daoapp.io/c_manageController/download.do?fileName=428778e0-1bff-4102-9398-ed6469b7784e.png",
        css:{
            index:"index.css",
            login:"login.css"
        }
    };



    config["init"]=function(_option){

        var option={
            root:"./",
            remoteHost:"./"
        };

        for(var key in _option){
            option[key]=_option[key];
        }


         this.base_url=option.root+"rest";
         this.html_path=option.root+"views/";
         this.js_path=option.root+"scripts/";
         this.css_path=option.root+"assets/css/";
         this.img_path=option.root+"assets/img/";
         this.remote_url=option.remoteHost+"";
         this.template_path=option.root+"uib/template/";
    };

    _window["$config"]=config;

})(window);



