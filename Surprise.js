var loadedNum = 1;

$(function(){
         var loaded = parseInt(localStorage.getItem('loaded'), 10);
         var loadedNum = loaded+1;
         localStorage.setItem('loaded', loadedNum);

         console.log(loadedNum);
    });

$(document).ready(function () {
   
    if (loadedNum > 1) {
        $(".title, .nav, .name, .text").fadeIn("fast");

    } else {
        $(".text_1").fadeIn(1000);
        $(".surprise").fadeIn(3000);
        $(".jib").delay(1000).fadeIn(3000);

        setInterval(function () {
            $(".nav1, .nav2, .nav3, .nav4, .nav5, .nav6").each(function(i) {
                $(this).delay(600*i).fadeIn("slow");
                });
            
            $(".name1, .name2, .name3, .name4, .name5, .name6").fadeIn(600);

            }, 4000);


        setInterval(function () {
            $(".nav7, .nav8, .nav9, .nav10, .nav11, .nav12").each(function(i) {
                $(this).delay(600*i).fadeIn("slow");
                });
            
            $(".name7, .name8, .name9, .name10, .name11, .name12").fadeIn(600);

            }, 4000);

        setInterval(function () {
            $(".text_2, .text_3").fadeIn("slow");

            }, 7000);
    } 

// Tooltip only Text
    $('.masterToolTip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
    }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
    });

});



