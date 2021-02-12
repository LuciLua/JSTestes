var cont = document.querySelector('.badge');

document.querySelector('#btn4').addEventListener('click', function(){
  var num = parseInt(cont.textContent) + 1;
  cont.textContent = num;
});

//if document.querySelector('clk-1')

    document.querySelector('.clk-1').addEventListener('click', function(){
function mk(length){
        var res = '';
        var ch = '01';
        var contCh = ch.length;
        
        for (var i = 0; i < length; i++){
            res += ch.charAt(Math.floor(Math.random() * contCh));
              }

        return res;
            }
    window.alert(mk(8));
            
    });

// Apenas 0 e 1 permitido

function OnlyZorO(e){

	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
    if (tecla=="48"){
        return true;
    }
    if (tecla=="49"){
        return true;
    }
    if (tecla=="8"){
        return true;
    }
    else{
        return false
    }
}

// Info sobre o binario
var minu = '011';
var maiu = '010';
var nume = '0011';

function bin(){

    var inpB = document.nade.inpB.value;
    var n = inpB.length          

    if (inpB.length==8){

            var res = "- Binário\n"

            if (inpB == minu.substr(0,3)+ inpB.substr(3,8)){
                var res = res + "- Letra minúscula\n";
            }
            if (inpB == maiu.substr(0,3)+inpB.substr(3,8)){
                var res = res + "- Letra maiúscula\n";
            }
            if (inpB == nume.substr(0,4)+inpB.substr(4,8)){
                var res = res + "- Número\n";
            }       
        }

    else{
        var res = "- Não é binário"
    }

    document.nade.inpB.value = inpB;
    document.nade.out.value = res;
}