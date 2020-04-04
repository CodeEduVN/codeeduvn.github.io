var g = {home: !1, path: '/themes/csug', tabnav: [], campaign: null, utm_source: null, num: {}};

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
    return o
}

$(document).ready(function () {
    $(function () {
        $('table.responsive').ngResponsiveTables({
            smallPaddingCharNo: 5,
            mediumPaddingCharNo: 10,
            largePaddingCharNo: 15
        })
    });

    $('.itemlist li').click(function (e) {
        $('li.active').removeClass('active');
        $(e.target).addClass('active')
    }).children().click(function (e) {
        e.stopPropagation()
    });
    $('.fancybox').fancybox({
        beforeShow: function () {
            var win = null;
            var content = $('.fancybox-inner');
            $('.fancybox-wrap').append('<div id="fancy_print"></div>');
            $('#fancy_print').bind("click", function () {
                win = window.open("width=200,height=200");
                self.focus();
                win.document.open();
                win.document.write('<' + 'html' + '><' + 'head' + '><' + 'style' + '>');
                win.document.write('body, td { font-family: \'Whitney SSm A\',Verdana; font-size: 10pt;}');
                win.document.write('.table {margin-bottom: 20px;}');
                win.document.write('th, td {font-size: 14px;line-height: 22px;padding: 10px;vertical-align:top;}');
                win.document.write('th {background-color: #70a1e6;color: #FFF;font-weight: 700;}');
                win.document.write('tr {background-color:#fff;}');
                win.document.write('td {color: #666;}');
                win.document.write('.totals {background: #fff !important;border-top: 1px solid #666;font-weight: bold;text-transform: uppercase;}');
                win.document.write('.totals-title {text-align: right;}');
                win.document.write('.table-striped tr:nth-child(odd) {background-color: #E3ECFB;}');
                win.document.write('<' + '/' + 'style' + '><' + '/' + 'head' + '><' + 'body' + '>');
                win.document.write(content.html());
                win.document.write('<' + '/' + 'body' + '><' + '/' + 'html' + '>');
                win.document.close();
                win.print();
                win.close()
            })
        }
    });
    $(".various").fancybox({
        fitToView: !0,
        width: '800',
        height: '650',
        autoSize: !0,
        closeClick: !1,
        openEffect: 'none',
        closeEffect: 'none',
    });
    $('[placeholder]').focus(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder')
        }
    }).blur(function () {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'))
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function () {
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('')
            }
        })
    });
    $('.col-content').find('.faculty dt').click(function () {
        $(this).next('dd').slideToggle('fast');
        $(this).toggleClass('faculty-active');
        $(this).siblings().next('dd').slideUp('fast');
        $(this).siblings().removeClass('faculty-active')
    });
    $('.col-left-sidebar').find('#sectionToggle').click(function () {
        $('#lnav .nav-tree').slideToggle('slow')
    });
    $('.col-left-sidebar .ccm-block-share-this-page a').addClass('shareLink');
    $('div.ccm-block-social-links a').addClass('footerNav shareLink')
});

function scrollWin(name) {
    $('html, body').animate({scrollTop: $('[name=' + name + ']').offset().top - 150}, 500)
}

function setSidebarFindDegree() {
    var type = $('#sidebar-finddegree [name=type]').val();
    var value = $('#sidebar-finddegree [name=' + type + '_programs] option:first').val();
    if (type == 'bs') {
        $('#sidebar-finddegree [name=ms_programs], #sidebar-finddegree [name=ll_programs]').hide();
        $('#sidebar-finddegree [name=bs_programs]').show();
        $('#sidebar-finddegree').attr('action', '/undergraduate/programs/bachelors-degrees/')
    } else if (type == 'ms') {
        $('#sidebar-finddegree [name=bs_programs], #sidebar-finddegree [name=ll_programs]').hide();
        $('#sidebar-finddegree [name=ms_programs]').show();
        $('#sidebar-finddegree').attr('action', '/graduate/programs/masters-degrees/')
    } else if (type == 'll') {
        $('#sidebar-finddegree [name=bs_programs], #sidebar-finddegree [name=ms_programs]').hide();
        $('#sidebar-finddegree [name=ll_programs]').show();
        $('#sidebar-finddegree').attr('action', '/undergraduate/programs/certificates-of-completion/')
    } else if (type == '') {
        $('#sidebar-finddegree [name=ms_programs], #sidebar-finddegree [name=ll_programs]').hide();
        $('#sidebar-finddegree [name=bs_programs]').show();
        $('#sidebar-finddegree').attr('action', '/undergraduate/programs/certificates-of-completion/')
    }
    $('#sidebar-finddegree').attr('action', value)
}

function setSidebarFindDegreeAction(type) {
    var value = $('#sidebar-finddegree [name=' + type + '_programs]').val();
    console.log('value: ' + value);
    $('#sidebar-finddegree').attr('action', value);
    console.log($('#sidebar-finddegree').attr('action'))
}

function dropdownSelect(set, item) {
    console.log('dropdownSelect(' + set + ',' + item + ')');
    $('#' + set + ' .item').slideUp('fast');
    t = setTimeout(function () {
        $('#' + set + ' #' + item).slideDown('fast')
    }, 300)
}

function submitForm(id) {
    $('#' + id).fadeOut('fast');
    var values = $('#' + id).serialize();
    var action = $('#' + id + ' #form_action_' + id).val();
    $.post(action, values, function () {
        var text = "<h2>Thank You!</h2><p>Your information has been submitted and we will contact you shortly.";
        $('#wrapper_' + id).html(text).addClass('thankyou');
        dataLayer.push({
            'event': 'VirtualPageview',
            'virtualPageURL': '/thankyou/' + id,
            'virtualPageTitle': 'Thank You - ' + id
        })
    })
}

function fastCount(id, num1, num2, time, dur) {
    if (typeof g.num[id] == "undefined") {
        g.num[id] = num1;
        vardur = time / num2
    }
    if (g.num[id] <= num2) {
        $('#' + id).text(g.num[id]);
        g.num[id]++;
        t = setTimeout(function () {
            fastCount(id, num1, num2, time, dur)
        }, dur)
    } else {
        delete g.num[id]
    }
}