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

     $('.wrap-main-nav .navbar-toggle').click( function() {
        $('#fix-header').addClass('active');
    });
 
    function loadDocument() {
        var $this = $('#fix-header'),
            posHeader = $this.offset().top;

        if(posHeader > 10) {
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
    // Select
    $('.slct').click(function(){
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop');
    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();

        /* Выделяем ссылку открывающую select */
        $(this).addClass('active');

        /* Работаем с событием клика по элементам выпадающего списка */
        $('.drop').find('li').click(function(){

            /* Заносим в переменную HTML код элемента
            списка по которому кликнули */
            var selectResult = $(this).html();

            /* Находим наш скрытый инпут и передаем в него
            значение из переменной selectResult */
            $(this).parent().parent().find('input').val(selectResult);

            /* Передаем значение переменной selectResult в ссылку которая
            открывает наш выпадающий список и удаляем активность */
            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

            /* Скрываем выпадающий блок */
            dropBlock.slideUp();
        });

    /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }

    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
});
});


 

