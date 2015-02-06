Template.comment.helpers({
    'login': function() {
        return (Meteor.user() == null) ? false : true;
    }
})

Template.comment.events({
    'click .fa-heart-o': function(event) {
        event.target.className = "fa fa-heart";
        // some logic save the change to database .......
    },
    'click .fa-heart': function(event) {
        event.target.className = "fa fa-heart-o";
        // some logic save the change to database .......
    },
    'click .btn-submit': function(event) {

        if ($('.leave-comment').val() == "") {
            return false;
        }

        var text = $('.leave-comment').val().replace(/\r?\n/g, "<br />");

        //  save comment to collection of comment Meteor.user().emails[0].address
        comment.insert({
            createdAt: new Date(),
            userId: Meteor.userId(),
            name: Meteor.user().emails[0].address,
            content: text,
            star: 99
        }, function(err, id) {
            var daramTitle = $('#myModalLabel').text();

            // save comment id to collection of dramaList
            Meteor.call('dramaListUpdate', {
                name: daramTitle
            }, {
                $push: {
                    comment: id
                }
            });

            $('.leave-comment').val("");
        });


    }
});
