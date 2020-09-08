$(function(){
    $('nav.mobile').on('click', function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true) {
            var btn = $('.btn-mobile').find('i');
            btn.removeClass('fa-bars');
            btn.addClass('fa-times');
            listaMenu.slideToggle();
        } else {
            var btn = $('.btn-mobile').find('i');
            btn.removeClass('fa-times');
            btn.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    });


    var link = $('.desktop ul li a');
    link.on('click', function(){
        var seletor = $(this).attr('href');
        var posicao = $(seletor).offset().top;
        $("html,body").animate({scrollTop: posicao - 70}, 1000);
    });
});