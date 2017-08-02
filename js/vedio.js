(function(window) {
    function queryString(key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    }

    var ResultSplitChar = "\u00ea\u00ea\u00ea";
    var data = {
        allnav: {
            menu_cs: [{
                    type: 'index',
                    name: '游戏规则',
                    key: 'index',
                    child: []
                }, {
                    type: 'baccarat',
                    name: '百家乐',
                    key: 'baccarat-normal',
                    child: [{
                        type: 'baccarat-normal',
                        name: '传统百家乐'
                    }, {
                        type: 'baccarat-insurance',
                        name: '保险百家乐'
                    }, {
                        type: 'baccarat-bid',
                        name: '共咪百家乐'
                    }, {
                        type: 'baccarat-color',
                        name: '多彩百家乐'
                    }]
                }, {
                    type: 'dragonTiger',
                    name: '龙虎',
                    key: 'dragonTiger',
                    child: []
                },
                {
                    type: 'sicbo',
                    name: '骰宝',
                    key: 'sicbo',
                    child: []
                }, {
                    type: 'roulette',
                    name: '轮盘',
                    key: 'roulette',
                    child: []
                }, {
                    type: 'bullbull',
                    name: '牛牛',
                    key: 'bullbull',
                    child: []
                }
            ],
            menu_tc: [{
                    type: 'index',
                    name: '遊戲規則',
                    key: 'index',
                    child: []
                }, {
                    type: 'baccarat',
                    name: '百家樂',
                    key: 'baccarat-normal',
                    child: [{
                        type: 'baccarat-normal',
                        name: '傳統百家樂'
                    }, {
                        type: 'baccarat-insurance',
                        name: '保險百家樂'
                    }, {
                        type: 'baccarat-bid',
                        name: '共咪百家樂'
                    }, {
                        type: 'baccarat-color',
                        name: '多彩百家樂'
                    }]
                }, {
                    type: 'dragonTiger',
                    name: '龍虎',
                    key: 'dragonTiger',
                    child: []
                },
                {
                    type: 'sicbo',
                    name: '骰寶',
                    key: 'sicbo',
                    child: []
                }, {
                    type: 'roulette',
                    name: '輪盤',
                    key: 'roulette',
                    child: []
                }, {
                    type: 'bullbull',
                    name: '牛牛',
                    key: 'bullbull',
                    child: []
                }
            ],
            menu_en: [{
                    type: 'index',
                    name: 'Game Rules',
                    key: 'index',
                    child: []
                }, {
                    type: 'baccarat',
                    name: 'Baccarat',
                    key: 'baccarat-normal',
                    child: [{
                        type: 'baccarat-normal',
                        name: 'Classic Baccarat'
                    }, {
                        type: 'baccarat-insurance',
                        name: 'Insurance Baccarat'
                    }, {
                        type: 'baccarat-bid',
                        name: 'MI Baccarat'
                    }, {
                        type: 'baccarat-color',
                        name: 'Multicolor Baccarat'
                    }]
                }, {
                    type: 'dragonTiger',
                    name: 'DragonTiger',
                    key: 'dragonTiger',
                    child: []
                },
                {
                    type: 'sicbo',
                    name: 'Sicbo',
                    key: 'sicbo',
                    child: []
                }, {
                    type: 'roulette',
                    name: 'Roulette',
                    key: 'roulette',
                    child: []
                }, {
                    type: 'bullbull',
                    name: 'Bull Bull',
                    key: 'bullbull',
                    child: []
                }
            ],
            menu_id: [{
                    type: 'index',
                    name: 'Game Rules',
                    key: 'index',
                    child: []
                }, {
                    type: 'baccarat',
                    name: 'Baccarat',
                    key: 'baccarat-normal',
                    child: [{
                        type: 'baccarat-normal',
                        name: 'Klasik Baccarat'
                    }, {
                        type: 'baccarat-insurance',
                        name: 'Baccarat Asuransi'
                    }, {
                        type: 'baccarat-bid',
                        name: 'MI Baccarat'
                    }, {
                        type: 'baccarat-color',
                        name: 'beraneka warna Baccarat'
                    }]
                }, {
                    type: 'dragonTiger',
                    name: 'DragonTiger',
                    key: 'dragonTiger',
                    child: []
                },
                {
                    type: 'sicbo',
                    name: 'Sicbo',
                    key: 'sicbo',
                    child: []
                }, {
                    type: 'roulette',
                    name: 'Roulette',
                    key: 'roulette',
                    child: []
                }, {
                    type: 'bullbull',
                    name: 'Bull Bull',
                    key: 'bullbull',
                    child: []
                }
            ],

            menu_ms: [{
                    type: 'index',
                    name: 'Peraturan',
                    key: 'index',
                    child: []
                }, {
                    type: 'baccarat',
                    name: 'Baccarat',
                    key: 'baccarat-normal',
                    child: [{
                        type: 'baccarat-normal',
                        name: 'Klasik Baccarat'
                    }, {
                        type: 'baccarat-insurance',
                        name: 'Baccarat Asuransi'
                    }, {
                        type: 'baccarat-bid',
                        name: 'MI Baccarat'
                    }, {
                        type: 'baccarat-color',
                        name: 'beraneka warna Baccarat'
                    }]
                }, {
                    type: 'dragonTiger',
                    name: 'DragonTiger',
                    key: 'dragonTiger',
                    child: []
                },
                {
                    type: 'sicbo',
                    name: 'Sicbo',
                    key: 'sicbo',
                    child: []
                }, {
                    type: 'roulette',
                    name: 'Roulette',
                    key: 'roulette',
                    child: []
                }, {
                    type: 'bullbull',
                    name: 'Bull Bull',
                    key: 'bullbull',
                    child: []
                }
            ]

        },
        ul: [],
        help_all: [],
        selected: '_cn',
        key: 'index',
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
        }],
    }
    var vm = new Vue({
        el: '.main',
        data: data,
        computed: {
            imgChange: function() {
                var self = this
                for (var i = 0; i < self.option.length; i++) {
                    if (self.option[i].value == self.selected) {
                        return self.option[i].img

                    }

                }
            },
            content: function() {
                var self = this;
                var key = self.key;
                if (self.key == "baccarat-normal") {
                    key = "baccarat"
                }
                var content = self.selected == '_cn' ? self.help_all[self.ul[key]] : self.help_all[self.ul[key + self.selected]];
                return content

            },
            leftlogo: function() {
                var custom = queryString('customCss') ? queryString('customCss') : "";
                if (custom && custom.length == 4) {
                    return custom + '/logo.png'
                } else {
                    return 'images/logo.png'
                }
            },
            nav_content: function() {
                var self = this;
                switch (self.selected) {
                    case '_tc':
                        return self.allnav.menu_tc
                        break
                    case '_en':
                        return self.allnav.menu_en
                        break
                    case '_id':
                        return self.allnav.menu_id
                        break
                    case '_ms':
                        return self.allnav.menu_ms
                        break
                    case '_cn':
                    default:
                        return self.allnav.menu_cs
                        break
                }
            },
            indexOpen: function() {
                if (this.key == "index") {
                    return true
                } else {
                    return false
                }
            }
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

            },
            setContent: function(index) {
                this.key = this.nav_content[index].key;

            }

        }

    });
})(window);