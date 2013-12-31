$(document).ready(function () {
   
    $(".text_1").fadeIn(3000);
    $(".surprise").delay(3000).fadeIn(3000);
    $(".jib").delay(4000).fadeIn(3000);

   $(".name").setInterval(function () {
        $(".name1, .name2, .name3, .name4, .name5, .name6").delay(200 * i).fadeIn(200);
        });
/*
setInterval(function(){alert("Hello")},3000);

  $("#element3,#element2,#element1").each(function(i) {
        $(this).delay(600*i).animate({opacity: "1"}, "slow");
    });
});

setTimeout(function(){
    ...
 },100 * idx);

*/
    $(".name6:visible").trigger(function() {
        $(".text_2, .text_3").fadeIn("slow");
    });
   



/*
    $("#inputBox").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            
        }

    });

// Save the player's guess if player clicks on "Submit"
    $("#submitButton").click(function () {
        event.preventDefault();
      
    });
*/

});