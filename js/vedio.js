var UT = {};
var CL = {};
var TplRoutobj;
var ResultSplitChar = "\u00ea\u00ea\u00ea";
var page = '';
var exception = ['index'];
var menu_cs = { 'rule': '游戏规则', 'baccarat': '百家乐', 'baccarat-normal': '传统百家乐', 'baccarat-insurance': '保险百家乐', 'baccarat-bid': '共咪百家乐', 'baccarat-color': '多彩百家乐', 'dragonTiger': '龙虎', 'sicbo': '骰宝', 'roulette': '轮盘', 'bullbull': '牛牛' };
var menu_tc = { 'rule': '遊戲規則', 'baccarat': '百家樂', 'baccarat-normal': '傳統百家樂', 'baccarat-insurance': '保險百家樂', 'baccarat-color': '多彩百家樂', 'baccarat-bid': '共咪百家樂', 'dragonTiger': '龍虎', 'sicbo': '骰寶', 'roulette': '輪盤', 'bullbull': '牛牛' };
var menu_en = { 'rule': 'Game Rules', 'baccarat': 'Baccarat', 'baccarat-normal': 'Classic Baccarat', 'baccarat-insurance': 'Insurance Baccarat', 'baccarat-bid': 'MI Baccarat', 'baccarat-color': 'Multicolor Baccarat', 'dragonTiger': 'DragonTiger', 'sicbo': 'Sicbo', 'roulette': 'Roulette', 'bullbull': 'Bull Bull' };
var menu_id = { 'rule': 'Aturan', 'baccarat': 'Baccarat', 'baccarat-normal': 'Klasik Baccarat', 'baccarat-insurance': 'Baccarat Asuransi', 'baccarat-bid': 'MI Baccarat', 'baccarat-color': 'beraneka warna Baccarat', 'dragonTiger': 'DragonTiger', 'sicbo': 'Sicbo', 'roulette': 'Roulette', 'bullbull': 'Bull Bull' };
var menu_ms = { 'rule': 'Peraturan', 'baccarat': 'Baccarat', 'baccarat-normal': 'Klasik Baccarat', 'baccarat-insurance': 'Baccarat Asuransi', 'baccarat-bid': 'MI Baccarat', 'baccarat-color': 'beraneka warna Baccarat', 'dragonTiger': 'DragonTiger', 'sicbo': 'Sicbo', 'roulette': 'Roulette', 'bullbull': 'Bull Bull' };
var menu = menu_cs;
var core = {
    init: function() {
        core.urlLayout();
    },
    queryString: function(key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    },
    ajax_template: function() {
        $.ajax({
            type: "get",
            url: 'template.html?v0717',
            dataType: "text",
            data: "",
            timeout: 6E4,
            cache: !0,
            async: false,
            success: function(a) {
                UT = a.split(ResultSplitChar);
                TplRoutobj = $.parseJSON(UT[0].toString());
            }
        });
    },
    setLayout: function(id) {

        $('*[data-gamebtn="index"]').text(menu['rule']);
        $('*[data-gamebtn="baccarat"]').text(menu['baccarat']);
        $('*[data-gamebtn="baccarat-normal"]').text(menu['baccarat-normal']);
        $('*[data-gamebtn="baccarat-insurance"]').text(menu['baccarat-insurance']);
        $('*[data-gamebtn="baccarat-color"]').text(menu['baccarat-color']);
        $('*[data-gamebtn="baccarat-bid"]').text(menu['baccarat-bid']);
        $('*[data-gamebtn="dragonTiger"]').text(menu['dragonTiger']);
        $('*[data-gamebtn="bullbull"]').text(menu['bullbull']);
        $('*[data-gamebtn="sicbo"]').text(menu['sicbo']);
        $('*[data-gamebtn="roulette"]').text(menu['roulette']);
        $('.leftUl li.selected').removeClass();
        $('#' + id).addClass('selected');
        var wrapWidth = $(window).width();
        if (wrapWidth < 980) {

            $(".game_list").fadeOut(200);
            if ($(".mobile_list_btn").hasClass('open')) {
                $(".mobile_list_btn").removeClass('open');
            }
        }

        page = id;
        if ($.inArray(id) == -1)
            $('#replace').html(UT[TplRoutobj[id + $('#leng').val()]]);
        else
            $('#replace').html(UT[TplRoutobj[id]]);
    },
    urlLayout: function() {
        var key = 'index';
        var locale = core.queryString('locale');

        switch (locale) {

            case 'zh_TW':
                menu = menu_tc;
                $('#leng').val('_tc');
                $("#leng").css("background-image", "url(images/c02.png)");
                break;
            case 'en_US':
                menu = menu_en;
                $('#leng').val('_en');
                $("#leng").css("background-image", "url(images/c03.png)");
                break;
            case 'id_ID':
                menu = menu_id;
                $('#leng').val('_id');
                $("#leng").css("background-image", "url(images/c04.png)");
                break;
            case 'ms_MY':
                menu = menu_ms;
                $('#leng').val('_ms');
                $("#leng").css("background-image", "url(images/c05.png)");
                break;
            case 'ko_KR':
            case 'th_TH':
            case 'vi_VN':
            case 'zh_CN':
            default:
                menu = menu_cs;
                $('#leng').val('');
                $("#leng").css("background-image", "url(images/c01.png)");
                break;
        }
        switch (core.queryString('type')) {
            case '1':
                key = 'baccarat';
                break;
            case '2':
                key = 'dragonTiger';
                break;
            case '3':
                key = 'sicbo';
                break;
            case '4':
                key = 'roulette';
                break;
            case '5':
                key = 'bullbull';
                break;
            case '1001':
                key = 'baccarat-more';
                break;
            case '2001':
                key = 'baccarat-insurance';
                break;
            case '3001':
                key = 'baccarat-bid';
                break;
            case '8001':
                key = 'baccarat-color';
                break;
            default:
                key = 'index';
        }
        core.setLayout(key);
    },
    changeLeng: function() {
        switch ($('#leng').val()) {
            case '_tc':
                menu = menu_tc;
                $("#leng").css("background-image", "url(images/c02.png)");

                break;
            case '_en':
                menu = menu_en;
                $("#leng").css("background-image", "url(images/c03.png)");
                break;
            case '_id':
                menu = menu_id;
                $("#leng").css("background-image", "url(images/c04.png)");
                break;
            case '_ms':
                menu = menu_ms;
                $("#leng").css("background-image", "url(images/c05.png)");
                break;
            default:
                menu = menu_cs;
                $("#leng").css("background-image", "url(images/c01.png)");
                break;
        }
        if (page) {
            core.setLayout(page);
        }
        $('#leng').blur();
    }
}
core.ajax_template();



function sizeContent() {
    var wrapHeight = $(window).height() - $(".main_title").height() - $(".mobile_list").height();
    var wrapWidth = $(window).width();
    var wrapHeight2 = $(window).height() - $(".main_title").height();

    $(".minH").css("min-height", wrapHeight2);

    if (wrapWidth > 980) {
        $(".game_list").show();
    } else {
        $(".game_list").hide();
        $(".game_list").height(wrapHeight);
        if ($(".mobile_list_btn").hasClass('open')) {
            $(".mobile_list_btn").removeClass('open');
        }

    }


}