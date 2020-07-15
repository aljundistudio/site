$(".menu-button").click(function(){
    $(".menu-button").fadeOut().addClass("hide");
    $(".x-button").fadeIn().removeClass("hide");
    $(".sidebar").animate({width:"100vw"});
    $(".menu").fadeIn().removeClass("hide");
    

})

$(".x-button").click(function(){
    $(".x-button").fadeOut().addClass("hide");
    $(".menu-button").fadeIn().removeClass("hide");
    $(".sidebar").animate({width:"125px"});
    $(".menu").fadeOut().addClass("hide");
})


// mobile

$(".menu-button-mobile").click(function(){
    $(".menu-button-mobile").fadeOut().addClass("hide");
    $(".x-button-mobile").fadeIn().removeClass("hide");
    $(".menu").fadeIn().removeClass("hide");
    

})

$(".x-button-mobile").click(function(){
    $(".x-button-mobile").fadeOut().addClass("hide");
    $(".menu-button-mobile").fadeIn().removeClass("hide");
    $(".menu").fadeOut().addClass("hide");
})


// homepage content

// for (let index = 1; index < 5; index++) {
//     var link = "Assets/imgs/me-with-logos/"+ index +".png";
//     $("#me-with-logos").attr("src", link).fadeIn().delay().fadeOut();
    
    
// }

// $(".me-with-logos")