$(function () {

    let header=$('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffSet=$(window).scrollTop();


    /*Fixed Header*/

    checkScroll(scrollOffSet);

    $(window).on("scroll",function () {
        scrollOffSet=$(this).scrollTop();
        checkScroll(scrollOffSet);
    });
    
    function checkScroll(scrollOffSet) {

        if(scrollOffSet>=introH){
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll*/
    $("[data-scroll]").on("click",function (event) {
        event.preventDefault();
        let blockId=$(this).data('scroll'),
            blockOffSet=$(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffSet
        })

    });



    /*Menu nav toggle*/

    $('#toggle_btn').on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active")
    });




});