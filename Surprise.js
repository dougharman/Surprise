
$(document).ready(function() {

	$(".text_1").fadeIn("3000", function () {
		var isVisible_1 = $(".text_1").is(":visible");
		if ( isVisible_1 === true ) {
			$("h1").delay(1000).fadeIn("fast");
		}
		});

// I tried putting this inside (a) a function, e.g., $(this).load...  and (b) an if statement, e.g, if ("h2:visible").load...  No luck!!!
// I want to delay it until the title / "Surprise" is shown	
    $.each($(".navigation li"), function (i, item) {
        setTimeout(function () {
            $(item).delay(1000).fadeIn(2000);
        }, 2000 * i);
	});  

	$(".text_2").delay(13000).fadeIn("slow");	
	$(".text_3").delay(13000).fadeIn("slow");
			
});
  