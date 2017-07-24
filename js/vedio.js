(function(window) {
    function queryString(key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    }

    var ResultSplitChar = "\u00ea\u00ea\u00ea";
    var data = {
        allnav: {
            menu_cs: {
                'rule': '游戏规则',
                'baccarat': '百家乐',
                'baccarat-normal': '传统百家乐',
                'baccarat-insurance': '保险百家乐',
                'baccarat-bid': '共咪百家乐',
                'baccarat-color': '多彩百家乐',
                'dragonTiger': '龙虎',
                'sicbo': '骰宝',
                'roulette': '轮盘',
                'bullbull': '牛牛'
            },
            menu_tc: {
                'rule': '遊戲規則',
                'baccarat': '百家樂',
                'baccarat-normal': '傳統百家樂',
                'baccarat-insurance': '保險百家樂',
                'baccarat-color': '多彩百家樂',
                'baccarat-bid': '共咪百家樂',
                'dragonTiger': '龍虎',
                'sicbo': '骰寶',
                'roulette': '輪盤',
                'bullbull': '牛牛'
            },
            menu_en: {
                'rule': 'Game Rules',
                'baccarat': 'Baccarat',
                'baccarat-normal': 'Classic Baccarat',
                'baccarat-insurance': 'Insurance Baccarat',
                'baccarat-bid': 'MI Baccarat',
                'baccarat-color': 'Multicolor Baccarat',
                'dragonTiger': 'DragonTiger',
                'sicbo': 'Sicbo',
                'roulette': 'Roulette',
                'bullbull': 'Bull Bull'
            },
            menu_id: {
                'rule': 'Aturan',
                'baccarat': 'Baccarat',
                'baccarat-normal': 'Klasik Baccarat',
                'baccarat-insurance': 'Baccarat Asuransi',
                'baccarat-bid': 'MI Baccarat',
                'baccarat-color': 'beraneka warna Baccarat',
                'dragonTiger': 'DragonTiger',
                'sicbo': 'Sicbo',
                'roulette': 'Roulette',
                'bullbull': 'Bull Bull'
            },
            menu_ms: {
                'rule': 'Peraturan',
                'baccarat': 'Baccarat',
                'baccarat-normal': 'Klasik Baccarat',
                'baccarat-insurance': 'Baccarat Asuransi',
                'baccarat-bid': 'MI Baccarat',
                'baccarat-color': 'beraneka warna Baccarat',
                'dragonTiger': 'DragonTiger',
                'sicbo': 'Sicbo',
                'roulette': 'Roulette',
                'bullbull': 'Bull Bull'
            }

        },
        nav_content: [],
        content: [],
        ul: [],
        help_all: [],
        selected: '_cn',
        selectedimg: '',
        key: '',
        option: [{
            text: '简体中文',
            img: 'images/c01.png',
            value: '_cn'
        }, {
            text: '繁體中文',
            img: 'images/c02.png',
            value: '_tc'
        }, {
            text: 'English',
            img: 'images/c03.png',
            value: '_en'
        }, {
            text: 'Indonesia',
            img: 'images/c04.png',
            value: '_id'
        }, {
            text: 'Malay',
            img: 'images/c05.png',
            value: '_ms'
        }]
    }
    var vm = new Vue({
        el: '.main',
        data: data,
        computed: {


        },
        created: function() {
            this.init();
            var self = this
            $.ajax({
                type: "get",
                url: 'template.html?v0717',
                dataType: "text",
                data: "",
                timeout: 6E4,
                cache: !0,
                async: false,
                success: function(a) {
                    self.help_all = a.split(ResultSplitChar);
                    self.ul = JSON.parse(self.help_all[0].toString());
                    self.$nextTick(function() {
                        self.setContent()
                    })


                }
            });
        },
        methods: {
            init: function() {
                var self = this;
                if (queryString('locale')) {
                    var locale = queryString('locale');

                    switch (locale) {
                        case 'zh_TW':
                            self.selected = "_tc"
                            break;
                        case 'en_US':
                            self.selected = "_en"
                            break;
                        case 'id_ID':
                            self.selected = "_id"
                            break;
                        case 'ms_MY':
                            self.selected = "_ms"
                            break;
                        case 'ko_KR':
                        case 'th_TH':
                        case 'vi_VN':
                        case 'zh_CN':
                        default:
                            self.selected = "_cn"
                            break;
                    }
                }
                for (var i = 0; i < self.option.length; i++) {
                    if (self.option[i].value == self.selected) {
                        self.selectedimg = self.option[i].img

                    }

                }
                self.changeNav();
            },
            changeLange: function() {
                var self = this
                for (var i = 0; i < self.option.length; i++) {
                    if (self.option[i].value == self.selected) {
                        self.selectedimg = self.option[i].img

                    }

                }
                self.changeNav();

            },
            changeNav: function() {
                var self = this;
                switch (self.selected) {
                    case '_tc':
                        self.nav_content = self.allnav.menu_tc
                        break
                    case '_en':
                        self.nav_content = self.allnav.menu_en
                        break
                    case '_id':
                        self.nav_content = self.allnav.menu_id
                        break
                    case '_ms':
                        self.nav_content = self.allnav.menu_ms
                        break
                    case '_cn':
                    default:
                        self.nav_content = self.allnav.menu_cs
                        break
                }
                this.putContent(self.key);

            },
            setContent: function() {
                var self = this;
                self.key = 'index';
                if (queryString('type')) {
                    var type = queryString('type');

                    switch (type) {
                        case '1':
                            self.key = 'baccarat';
                            break;
                        case '2':
                            self.key = 'dragonTiger';
                            break;
                        case '3':
                            self.key = 'sicbo';
                            break;
                        case '4':
                            self.key = 'roulette';
                            break;
                        case '5':
                            self.key = 'bullbull';
                            break;
                        case '1001':
                            self.key = 'baccarat-more';
                            break;
                        case '2001':
                            self.key = 'baccarat-insurance';
                            break;
                        case '3001':
                            self.key = 'baccarat-bid';
                            break;
                        case '8001':
                            self.key = 'baccarat-color';
                            break;
                        default:
                            self.key = 'index';
                    }

                }
                this.putContent(self.key);

            },
            putContent: function(key) {
                var self = this;
                self.key = key;
                self.content = self.selected == '_cn' ? self.help_all[self.ul[key]] : self.help_all[self.ul[key + self.selected]];

            }
        }

    });
})(window);