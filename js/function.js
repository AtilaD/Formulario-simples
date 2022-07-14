window.onload = function(){

    // funcoes para abrir e fechar formulario

    abrirJanela();
    verificarCliqueJanela();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueJanela(){
        var el = $('body,.closeBtn');

        el.click(function(){
            $('.bg').fadeOut(1000, function(){

            });
        })
        
        $('form').click(function(e){
            e.stopPropagation();
        })
    }

    //eventos do formulario

    $('form#form1').submit(function(e){
        e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'))
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'))
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'))
        }else{
            alert('Formulario enviado com sucesso')
        };

        //funcoes para verificar nosso formulario

        function verificarNome(nome){
            // contando a quantidade de espacos e os respectivos valores
            if(nome == ''){
                return false
            }
            var amount = nome.split(' ').length;
            var splitStr = nome.split(' ');
            if(amount >= 2){
                for(var i = 0; i < amount; i++ ){
                    if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

                    }else{
                        return false;
                    }
                }
            }else{
                return false;
        }
        }

        function aplicarCampoInvalido(el){
            el.css('border','2px solid red');
            el.data('invalido','true');
            el.val('Campo Invalido!');
        }

        
        function resetarCampoInvalido(el){
            el.css('border','1px solid black');
            el.data('invalido','true');
            el.val('');
        }

        $('input[type=text]').focus(function(){
            resetarCampoInvalido($(this));
        })

        function verificarTelefone(telefone){
            if(telefone == ''){
            return false;
            }

            if(telefone.match(/^\([0-9]{2}\)[9]{1}-[0-9]{4}-[0-9]{4}$/) == null){
                return false;
            }
        }

        function verificarEmail(email){
            if(email == ''){
                return false
            }
            if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
                return false;
            }
        }
        
        //se chegou ate o final é pq esta tudo ok
    })
};
