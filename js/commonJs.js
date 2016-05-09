$(document).ready(function() {
    document.getElementById('lang-select').onchange = function() {
        if (this.value) 
            window.location.href = this.value;
    }

    $('#btn-back-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    function loadDocument() {
        var $this = $('#fix-header'),
            posHeader = $this.offset().top;

        if(posHeader > 30) {
            if(!$this.hasClass('active')) {
                $this.addClass('active');
            }
        }
        else {
            if($this.hasClass('active')) {
                $this.removeClass('active');
            }
        }

        if(posHeader > 400) {
            $('#btn-back-top').css('display', 'block');
        }
        else {
            $('#btn-back-top').css('display', 'none');
        }
    }

    loadDocument();

    $(document).scroll(function() {
        loadDocument();
    });

    $('#arrow-down').on('click', function() {
        $('html, body').animate({
            scrollTop: $(window).height() - 114
        }, 600);
    });

    $('.list-faq h2').on('click', function () {
        $(this).parent().toggleClass('active').find('p').slideToggle();
    });

    $(window).load(function() {
        $('.wrap-loader').css('display', 'none');
    });

    $('nav li ul').hide().removeClass('fallback');
    $('nav li').hover(
    function () {
       $('ul', this).stop().slideDown(400);
     },
    function () {
    $('ul', this).stop().slideUp(400);
      });
});