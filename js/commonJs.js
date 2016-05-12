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

  //hamburger products
    (function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery