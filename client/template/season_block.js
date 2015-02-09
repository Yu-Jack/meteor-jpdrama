Template.season_block.helpers({
    season_1: function() {
        return dramaList.find({
            season: 1
        }, {
            sort: {
                star: -1
            }
        });
    },
    season_4: function() {
        return dramaList.find({
            season: 4
        }, {
            sort: {
                star: -1
            }
        });
    },
    season_7: function() {
        return dramaList.find({
            season: 7
        }, {
            sort: {
                star: -1
            }
        });
    },
    season_10: function() {
        return dramaList.find({
            season: 10
        }, {
            sort: {
                star: -1
            }
        });
    }
});

Template.season_block.events({
    'click a': function(event) {
        var originY = event.pageY - event.offsetY;
        console.log(event);
        $('#modal').empty();
        // drama information 
        Blaze.renderWithData(Template.modal, darmaData, document.getElementById('modal'));
        // comment template information
        Blaze.renderWithData(Template.comment, {}, document.getElementsByClassName('drama-comment')[0]);
        // comment information 
        Blaze.renderWithData(Template.comment_single, commentData, document.getElementsByClassName('comment')[0]);

        // $('#modal').openModal({
        //     ready: function(){
        //         // $('#modal').css('top',event.pageY - 100 );
        //     },
        //     complete: function() {
        //         $('body').scrollTop(originY);
        //     }
        // });
        // var width;

        // if($(window).width() > 992 ){
        //     width = '60%';
        // }else if ( 600 < $(window).width() &&  $(window).width() < 992  ){
        //     width = '80%';
        // }else if ( $(window).width() < 600 ){
        //     width = '95%';
        // }

        // $.colorbox({
        //     html:$('#modal').html(),
        //     fixed:true,
        //     width: width,
        //     height: '95%',
        //     maxWidth: '96%',
        //     maxHeight: '96%',
        //     onOpen: function(){
        //         $('body').css('overflow', 'hidden');
        //     },
        //     onClosed: function(){
        //         $('body').css('overflow', '');  
        //     }
        // });


        function darmaData() {
            var object = {
                data: dramaList.find({
                    name: event.target.innerHTML
                }).fetch()[0]
            };
            return object;
        }

        function commentData() {
            // find information of user ( i.g  name ......)
            var idList = dramaList.find({
                    name: event.target.innerHTML
                }).fetch()[0].comment,
                comments = [];


            for (var i in idList) {
                comments.push(comment.find({
                    _id: idList[i]
                }).fetch()[0]);
            }

            object = {
                data: comments
            };

            return object;
        }
    }
});
