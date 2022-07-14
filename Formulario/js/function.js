window.onload = function(){

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
};
