var cont = document.querySelector('.badge');

document.querySelector('#btn4').addEventListener('click', function(){
  var num = parseInt(cont.textContent) + 1;
  cont.textContent = num;
});

//if document.querySelector('clk-1')

    document.querySelector('.clk-1').addEventListener('click', function(){
function mk(length){
        var res = '';
        var ch = 'ABCDE';
        var contCh = ch.length;
        
        for (var i = 0; i < length; i++){
            res += ch.charAt(Math.floor(Math.random() * contCh));
              }

        return res;
            }
    window.alert(mk(8));
            
    });

    function addNewBtn(){
        $(".screen").append("<button class='bot'>Botão</button><br>");
    }

    function nada(){
        window.alert("ola");
    }


