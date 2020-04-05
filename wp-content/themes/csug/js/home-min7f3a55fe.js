$(document).ready(function () {
    if ($(window).height() > 600) {
        $('.gallery_item').css('height', ($(window).height() - 40) + 'px')
    }
    $(function () {
        var images = ['bg_mainimage_01.jpg', 'bg_mainimage_02.jpg', 'bg_mainimage_03.jpg', 'bg_mainimage_04.jpg', 'bg_mainimage_05.jpg', 'bg_mainimage_06.jpg', 'bg_mainimage_07.jpg', 'bg_mainimage_09.jpg'];
        $('#gal_im').css({'background-image': 'url(application/themes/csug/imgs/' + images[Math.floor(Math.random() * images.length)] + ')'});
        $('#mobile_intro').css({'background-image': 'url(application/themes/csug/imgs/' + images[Math.floor(Math.random() * images.length)] + ')'})
    });
    $(function () {
        $('#testimonials #circles img').on('keypress click', function (e) {
            $('#testimonials #circles img.curtestimonial').removeClass('curtestimonial');
            $(this).addClass('curtestimonial');
            var index = $('#testimonials #circles img.curtestimonial').index();
            $('#testimonials #quotes .selected').removeClass('selected');
            $('#testimonials #quotes div:eq(' + index + ')').addClass('selected')
        })
    })
    $('.bgfull').hover(function () {
        $(this).siblings('.text, .quotes').toggleClass('fadeitem')
    });
    if ($(window).width() > 700) {
        im.rotate()
    }
    $('#set1_lg a').hover(function () {
        im.pause = !0
    }, function () {
        im.pause = !1
    })
});

function openMenu(id) {
    $('#' + id).fadeIn('fast')
}

function closeMenu(id) {
    $('#' + id).fadeOut('fast')
}

var im = {
    open: !1, imClick: function () {
        if (im.open == !1) {
            im.getList('set1_sm')
        } else {
            im.close()
        }
    }, close: function () {
        $('.subset.active').slideUp('fast', function () {
            var t = setTimeout(function () {
                $('#im .im_container').removeClass('open');
                $('#set1_lg').fadeIn('fast');
                $('#imbox').removeClass('im_step_close').addClass('im_step_open');
                im.open = !1
            }, 200)
        })
    }, pause: !1, rotateNum: 1, rotate: function () {
        t = setTimeout(function () {
            if (im.pause == !1) {
                if (im.rotateNum == 5) {
                    var rotateNumNew = 1
                } else {
                    var rotateNumNew = im.rotateNum + 1
                }
                $('#step_0_' + im.rotateNum + '_lg').fadeOut('fast');
                $('#step_0_' + rotateNumNew + '_lg').delay(500).fadeIn('fast');
                im.rotateNum = rotateNumNew
            }
            im.rotate()
        }, 4000)
    }, getList: function (id) {
        if (im.open == !1) {
            $('#set1_lg').fadeOut('fast', function () {
                $('#im .im_container').delay(300).addClass('open');
                $('#imbox').removeClass('im_step_open').addClass('im_step_close')
            })
        }
        $('#slider .subset.active').slideUp('fast');
        $('#' + id).delay(700).slideDown('fast').addClass('active');
        im.open = !0
    }
}

function setFindDegree() {
    var type = $('#finddegree [name=type]').val();
    var value = $('#finddegree [name=' + type + '_programs] option:first').val();
    if (type == 'bs') {
        $('#finddegree [name=ms_programs], #finddegree [name=ll_programs]').hide();
        $('#finddegree [name=bs_programs]').show()
    } else if (type == 'ms') {
        $('#finddegree [name=bs_programs], #finddegree [name=ll_programs]').hide();
        $('#finddegree [name=ms_programs]').show()
    } else if (type == 'll') {
        $('#finddegree [name=bs_programs], #finddegree [name=ms_programs]').hide();
        $('#finddegree [name=ll_programs]').show()
    } else if (type == '') {
        $('#finddegree [name=ms_programs], #finddegree [name=ll_programs]').hide();
        $('#finddegree [name=bs_programs]').show()
    }
    $('#finddegree').attr('action', value)
}

function setFindDegreeAction(type) {
    var value = $('#finddegree [name=' + type + '_programs]').val();
    $('#finddegree').attr('action', value)
}