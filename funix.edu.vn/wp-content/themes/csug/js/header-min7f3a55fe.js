var mobinav = {
    scrollPos: 0, openstate: !1, openclose: function () {
        if ($('#mainnav').is(':visible')) {
            $('#header_mobile_container').removeClass('full');
            $('#mainnav, .mobile-menu .sub-menu').slideUp('fast');
            mobinav.openstate = !1
        } else {
            $('#header_mobile_container').addClass('full');
            $('#mainnav').slideDown('fast');
            mobinav.openstate = !0
        }
    }, ctapanel: function () {
        if ($('#ctapanel').is(':visible')) {
            $('#header_mobile').removeClass('full');
            $('#rfilink').removeClass('close').addClass('fade');
            setTimeout(function () {
                $('#rfilink').text('ĐĂNG KÝ').removeClass('fade')
            }, 500);
            $('#ctapanel').slideUp('fast');
            mobinav.openstate = !1
        } else {
            $('#header_mobile').addClass('full');
            $('#rfilink').text('x').addClass('close');
            $('#ctapanel').slideDown('fast');
            $('#mainnav, .mobile-menu .sub-menu').slideUp('fast');
            mobinav.openstate = !0
        }
    }
};
var mainnav = {
    subopen: !1, scrollPos: 0, clear: !1, curSection: null, curSub: null, open: function (id) {
        if (mainnav.clear == !0) {
            $('#header_desktop_container').removeClass('clear')
        }
        $('#subheader_desktop_container').slideDown('fast', function () {
            mainnav.getSection(id)
        });
        mainnav.subopen = !0
    }, close: function () {
        if (mainnav.clear == !0) {
            $('#header_desktop_container').addClass('clear')
        }
        $('#subheader_desktop_container').slideUp('fast');
        $('.section').fadeOut('fast');
        $('#subheader_desktop .sectiontitle').fadeOut('fast');
        mainnav.subopen = !1
    }, getSection: function (id) {
        $('.snav').removeClass('active');
        $('.section, .subsub').fadeOut('fast', function () {
            var sectionLink;
            var sectionTitle;
            if (id == 'UG') {
                sectionLink = "/undergraduate";
                sectionTitle = 'UNDERGRADUATE'
            } else if (id == 'GR') {
                sectionLink = "/graduate";
                sectionTitle = 'GRADUATE'
            } else if (id == 'AM') {
                sectionLink = "/admissions";
                sectionTitle = 'ADMISSIONS'
            } else if (id == 'CO') {
                sectionLink = "/cost";
                sectionTitle = 'COST'
            } else if (id == 'RS') {
                sectionLink = "/resources";
                sectionTitle = 'RESOURCES'
            } else if (id == 'AB') {
                sectionLink = "/about";
                sectionTitle = 'ABOUT'
            }
            $('#subheader_desktop .sectiontitle').html(sectionTitle + ' &#187;').attr('href', sectionLink).fadeIn('fast');
            $('#' + id + ' .col1 a').first().addClass('active');
            setTimeout(function () {
                $('#' + id).fadeIn('fast');
                var sub = $('#' + id + ' .subsub').first().attr('id');
                mainnav.getSub(sub, !0);
                $('#' + id + ' .col1 a:first').focus()
            }, 300)
        })
    }, getSub: function (id, main) {
        $('.subsub').fadeOut('fast');
        setTimeout(function () {
            $('#' + id).fadeIn('fast');
            if (main != !0) {
                $('#' + id + ' a.mainpage').focus()
            }
        }, 300)
    }, focusMain: function () {
        $(mainnav.curSection).focus()
    }, focusSub: function () {
        $(mainnav.curSub).focus()
    }, focusSubBack: function () {
        console.log('function: focusSubBack()');
        console.log($('.col1:visible .snav.active')[0]);
        $('.col1:visible .active').focus()
    }
};
$(document).ready(function () {
    $(document).on('click', function (event) {
        if ($('#ctapanel').is(':visible')) {
            if (!$(event.target).closest('#ctapanel').length) {
                mobinav.ctapanel()
            }
        }
        if (!$(event.target).closest('#header_desktop #search').length) {
            $('#bottomrow-menu').fadeIn('fast');
            $('#header_desktop #search').removeClass('active');
            $('#header_desktop #search #sitesearch').val('')
        }
    });
    $('#mainnav').on('click', function () {
        $('#mainnav, .mobile-menu li ul').slideUp('fast');
        mobinav.openstate = !1
    });
    $('.mobile-menu li, #mainnav a').on('click', function (e) {
        e.stopPropagation()
    });
    $('.mobile-menu li').on('click', function () {
        $('.mobile-menu li').children('ul').slideUp('fast');
        var snav = $(this).children('ul');
        if ($(snav).is(':visible')) {
            $(snav).slideUp('fast')
        } else {
            $(snav).slideDown('fast')
        }
        mainnav.curSection = this
    });
    $('.mobile-menu li a').on('click', function () {
        $('.mobile-menu li').children('ul').slideUp('fast');
        var snav = $(this).parent().children('ul');
        if ($(snav).is(':visible')) {
            $(snav).slideUp('fast')
        } else {
            $(snav).slideDown('fast')
        }
        mainnav.curSection = this
    });
    $('.mobile-menu .sub-menu li').on('click', function () {
        $('.mobile-menu .sub-menu li').removeClass('active');
        $(this).addClass('active');
        mainnav.curSub = this
    });
    $('.snav').keydown(function (e) {
        var key = e.keyCode;
        if (e.shiftKey && key == 9) {
            console.log('shift key was pressed')
        } else if (key == 9) {
            if (this === $('.col1:visible .snav:last')[0]) {
                console.log('last one');
                mainnav.focusMain()
            } else {
                console.log('not last one, do nothing!!!')
            }
        }
    });
    $('.mainpage, .ssnav').keydown(function (e) {
        var key = e.keyCode;
        if (e.shiftKey && key == 9) {
            console.log('shift key was pressed');
            if (this === $('.subsub:visible .mainpage')[0]) {
                mainnav.focusSubBack()
            }
        } else if (key == 9) {
            if (this === $('.subsub:visible .ssnav:last')[0]) {
                console.log('last one');
                mainnav.focusSub()
            } else {
                console.log('not last one, do nothing!!!')
            }
        }
    });
    $('input[name="query"]').keydown(function (e) {
        var key = e.keyCode;
        if (!e.shiftKey && key == 9) {
            $('#bottomrow-menu').fadeIn('fast');
            $('#header_desktop #search').removeClass('active');
            $('#header_desktop #search #sitesearch').val('')
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            if (mainnav.subopen == !0) {
                mainnav.close();
                $('ol.breadcrumb a:first').focus()
            }
        }
    });
    $('#header_desktop #search *').on('focus', function () {
        $('#bottomrow-menu').fadeOut('fast');
        $('#header_desktop #search').addClass('active')
    })
});
var popupWindow = null;

function centeredPopup(url, winName, w, h, scroll) {
    lPos = (window.width) ? (window.width - w) / 2 : 0;
    tPos = (window.height) ? (window.height - h) / 2 : 0;
    settings = 'height=' + h + ',width=' + w + ',top=' + tPos + ',left=' + lPos + ',scrollbars=' + scroll + ',resizable';
    popupWindow = window.open(url, winName, settings)
}