var map = [{
    name: '對不起青春',
    year: 2014,
    season: 10,
    star: 130,
    content: "對不起拉",
    images: "http://f.blog.xuite.net/f/0/a/b/12449715/blog_36493/txt/249250103/0.jpg",
    comment:[]
}, {
    name: 'Hero 2',
    year: 2014,
    season: 7,
    star: 150,
    content: "我是英雄",
    images: "http://upload.wikimedia.org/wikipedia/zh/3/37/HERO2.jpg",
    comment:[]
}, {
    name: '續。倒數第二次戀愛',
    year: 2014,
    season: 4,
    star: 120,
    content: "戀愛拉",
    images: "http://4.bp.blogspot.com/-BVB7_LudrfU/UwngI278_PI/AAAAAAAAGCE/ue76WrLN6Ys/s1600/%25E5%2580%2592%25E6%2595%25B8%25E7%25AC%25AC%25E4%25BA%258C%25E6%25AC%25A1%25E6%2588%2580%25E6%2584%259B.jpg",
    comment:[]
}, {
    name: '失戀巧克力職人',
    year: 2014,
    season: 1,
    star: 110,
    content: "失戀了QQ",
    images: "http://upload.wikimedia.org/wikipedia/zh/c/cf/Chocolatier.jpg",
    comment:[]
}, {
    name: '為了 N',
    year: 2014,
    season: 10,
    star: 1200,
    content: "超恐怖的",
    images: "http://3.bp.blogspot.com/-zCW3ONSenrU/VEKGXXbpB0I/AAAAAAAAAzY/FOl8rmOUR4w/s800/%E7%82%BA%E4%BA%86N.jpg",
    comment:[]
}, {
    name: 'Dear Sister',
    year: 2014,
    season: 10,
    star: 190,
    content: "戀愛拉",
    images: "http://kenshin.hk/blog/2014-04/dearsister-title.jpg",
    comment:[]
}, {
    name: 'Legal High 2',
    year: 2013,
    season: 10,
    star: 120,
    content: "好好笑",
    images: "http://4.bp.blogspot.com/-M8oDVwnnlOQ/UlgHUfoT3_I/AAAAAAAAFFk/uzGqJ6BhJrM/s1600/%25E7%258E%258B%25E7%2589%258C%25E5%25A4%25A7%25E5%25BE%258B%25E5%25B8%25AB2+Legal+High+2.jpg",
    comment:[]
}, {
    name: '半澤直樹',
    year: 2013,
    season: 7,
    star: 1290,
    content: "超醒悟",
    images: "http://lh4.ggpht.com/-uFunOFaePFQ/UeSWp8IwqAI/AAAAAAAAIx8/BKcCgcSwtcw/hanzawa_naoki03-f_thumb1.jpg",
    comment:[]
}, {
    name: 'Doctor-X',
    year: 2012,
    season: 10,
    star: 999,
    content: "超爽的",
    images: "http://3.bp.blogspot.com/-cuHhI8vX4S0/UmQBBAGJdcI/AAAAAAAAFLE/tTbvAsdpMP4/s1600/Doctor-X+2+%25E6%25B4%25BE%25E9%2581%25A3%25E5%25A5%25B3%25E9%2586%25ABX+2.jpg",
    comment:[]
}, {
    name: '家族遊戲',
    year: 2013,
    season: 4,
    star: 920,
    content: "好懸疑",
    images: "http://upload.wikimedia.org/wikipedia/zh/f/f1/Kazoku_Game_2013.png",
    comment:[]
}];

Template.Home.events({
    'click .test': function() {
        for (var i = 0; i < map.length; i++) {
            dramaList.insert({
                createdAt: new Date(),
                name: map[i].name,
                year: map[i].year,
                season: map[i].season,
                star: map[i].star,
                images: map[i].images,
                content: map[i].content,
                comment: map[i].comment
            });
        }
    },
    'click .clear': function() {
        Session.set('login', true);
        Meteor.call("dramaListRemoveAll", function(error) {
            console.log(error);
        });
    }
});

Template.Home.helpers({
    root: function(){
        if ( Meteor.user().emails[0].address == "jk82421@gmail.com" )
            return true;
    }
})