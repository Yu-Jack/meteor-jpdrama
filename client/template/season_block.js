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
        
        $('#modal').empty();
        // drama information 
        Blaze.renderWithData(Template.bootstrap_modal, darmaData, document.getElementById('modal'));
        // comment template information
        Blaze.renderWithData(Template.comment, {}, document.getElementsByClassName('drama-comment')[0]);
        // comment information 
        Blaze.renderWithData(Template.comment_single, commentData, document.getElementsByClassName('comment')[0]);

        $('#modal').openModal({
            ready: function(){$('body').css('overflow-y','hidden');},
            complete: function(){$('body').css('overflow-y','');}
        });

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
