$(document).ready(function () {
   
    $(".text_1").fadeIn(3000);
    $(".surprise").delay(3000).fadeIn(3000);
    $(".jib").delay(4000).fadeIn(3000);

    setInterval(function () {
        $(".nav1, .nav2, .nav3, .nav4, .nav5, .nav6").each(function(i) {
            $(this).delay(600*i).fadeIn("slow");
            });
        
        $(".name1, .name2, .name3, .name4, .name5, .name6").fadeIn(600);

        }, 10000);

    setInterval(function () {
        $(".text_2, .text_3").fadeIn("slow");

        }, 11000);

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

// Click a navigation picture to see more of the collection
    $(".nav1").click(function () {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav1-1_Scary.html";
    });

    $(".nav2").click(function () {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav1-2_Comic.html";
    });

    $(".nav3").click(function () {
                event.preventDefault();
                window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav2-1_Animals.html";
        });

    $(".nav4").click(function () {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav2-2_Holiday.html";
    });

    $(".nav5").click(function () {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav3-1_Political.html";
    });

    $(".nav6").click(function () {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav3-2_Emphemera.html";
    });

// Press "Enter" on a navigation picture to see more of the collection    
    $(".nav1").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav1-1_Scary.html";
        }

    });

    $(".nav2").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav1-2_Comic.html";
        }

    });

    $(".nav2").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav2-2_Animals.html";
        }

    });

    $(".nav2").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav2-2_Holiday.html";
        }

    });

    $(".nav2").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav3-1_Political.html";
        }

    });

    $(".nav2").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            window.location="file:///Users/dougharman/Dropbox/Public/Surprise/Nav3-2_Emphemera.html";
        }

    });

    
/*    $( "select" )
      .change(function () {
        var str = "";
        $( "select option:selected" ).each(function() {
          str += $( this ).text() + " ";
        });
        $( "div" ).text( str );
      })
      .change();    */


});



