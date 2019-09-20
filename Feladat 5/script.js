function otodikf() {
    var array = [];
    //array.unshift();
    for (var i = 0; i < 5; i++) {
      var be = false;
      while (be == false) {
        be = getIntFromUser("Kérem az "+(i+1)+". számot.");
  
        if(be === false){
          alert("Hibás beadott adat.");
        }else array.push(be);
  
      }
    }
  
    for (var i = 0; i < array.length; i++) {
      document.getElementById('5feladat').innerHTML += "<span>"+array[i]+" * 2 = "+(array[i]*2)+"</span><br>";
    }
}
  
function getIntFromUser(question) {
    var a;
    while(true) {
        if(!a) {
            swal(question, {
                content: "input",
            })
            .then((be) => {
                if(be != "" && be != null) {
                    if(!isNaN(be)) {
                    if(isInt(be)){
                        return be;
                    }else return false;
                    }else return false;
                }else return false;
            });
        }
    }
    
}

function isInt(n) {
    return n % 1 === 0;
 }