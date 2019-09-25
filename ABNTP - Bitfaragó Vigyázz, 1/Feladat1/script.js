function call(){
            asd();
        }
        var tájtöl = ["Főoldal","fŐoldal","főOldal","főoLdal","főolDal","főoldAl","főoldaL"]; //0-6
        var holtart = 0;
        var ergébé = 0;
        var pluszminusz = 1;
        var szeleseg1 = 10;
        var widthplusz = 0.01;
        var szeleseg2 = 11.5;
        var heightplusz = 0.01;
        function asd(){
            if(holtart === 7){holtart = 0;}
            document.title = tájtöl[holtart];
            holtart+=1;

            if (ergébé === 255){
                pluszminusz = -1;
            }
            else if (ergébé === 0){
                pluszminusz = 1;
            }
            ergébé += pluszminusz;
            

            if (szeleseg1 > 11){
                widthplusz = -0.01;
            }
            else if (szeleseg1 < 9){
                widthplusz = 0.01;
            }

            szeleseg1 += widthplusz;

            if (szeleseg2 > 12){
                heightplusz = -0.01;
            }
            else if (szeleseg2 < 10.5){
                heightplusz = 0.01;
            }

            szeleseg2 += heightplusz;

            document.body.style.background = "linear-gradient(45deg, rgb("+ergébé+", 0, 255), transparent), repeating-linear-gradient(45deg, rgb(183,0,255) 0%,rgb(183,0,255) 5%, transparent 5%,transparent 10%,rgb(183,0,255) 0%,rgb(183,0,255) "+szeleseg2+"%,transparent "+szeleseg2+"%,transparent 13%), rgb(216,118,255) repeating-linear-gradient(-45deg ,rgba(183,0,255,0.5) 0%,rgba(183,0,255,0.5) 5%,transparent 5%,transparent "+szeleseg1+"%)";
        
        setTimeout(asd,100);
        }