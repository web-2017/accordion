$(function(){
    var text = $('.accordion > #text').hide();
    text.first().show();

    $('.accordion > div > a').click(function(e){
        e.preventDefault();
        var $this = $(this);

        text.slideUp();
        $this.parent().next().slideDown();
        
        return false;
    });
});
