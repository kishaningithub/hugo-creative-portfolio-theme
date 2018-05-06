masonry();
$(function () {
    offCanvas();
    lightbox();
    carousels();
    utils();
    highlightCurrentPage();
    makeImagesResponsive();
});
function highlightCurrentPage() {
  $("a[href='" + location.href + "']").parent().addClass("active");
}
function makeImagesResponsive() {
    $("img").addClass("img-responsive");
}
/* =========================================
 *  carousels
 *  =======================================*/
function carousels() {
    $('#main-slider').owlCarousel({
	navigation: true, // Show next and prev buttons
	slideSpeed: 300,
	paginationSpeed: 400,
	autoPlay: true,
	stopOnHover: true,
	singleItem: true,
	afterInit: ''
    });
}
/* =========================================
 *  masonry
 *  =======================================*/
function masonry() {
    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}
/* =========================================
 *  Off-canvas menu
 *  =======================================*/
function offCanvas() {
    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });
}
/* =========================================
 *  lightbox
 *  =======================================*/
function lightbox() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}
/* =========================================
 *  utils
 *  =======================================*/
function utils() {
    /* tooltips */
    $('[data-toggle="tooltip"]').tooltip();
    /* click on the box activates the radio */
    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */
    $('.box.clickable').on('click', function (e) {
        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/
    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */
    $('.scroll-to').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        $('body').scrollTo($('#' + trgt), 800, {offset: -80});
    });
}
/* product detail gallery */
function productDetailGallery(confDetailSwitch) {
    $('.thumb:first').addClass('active');
    timer = setInterval(autoSwitch, confDetailSwitch);
    $(".thumb").click(function (e) {
        switchImage($(this));
        clearInterval(timer);
        timer = setInterval(autoSwitch, confDetailSwitch);
        e.preventDefault();
    }
    );
    $('#mainImage').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(autoSwitch, confDetailSwitch);
    });
    function autoSwitch() {
        var nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb');
        if (nextThumb.length == 0) {
            nextThumb = $('.thumb:first');
        }
        switchImage(nextThumb);
    }
    function switchImage(thumb) {
        $('.thumb').removeClass('active');
        var bigUrl = thumb.attr('href');
        thumb.addClass('active');
        $('#mainImage img').attr('src', bigUrl);
    }
}
/* product detail sizes */
function productDetailSizes() {
    $('.sizes a').click(function (e) {
        e.preventDefault();
        $('.sizes a').removeClass('active');
        $('.size-input').prop('checked', false);
        $(this).addClass('active');
        $(this).next('input').prop('checked', true);
    });
}
$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {
        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }
        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}
$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();
});
$(window).resize(function () {
    newWindowWidth = $(window).width();
    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 205);
        windowWidth = newWindowWidth;
    }
});