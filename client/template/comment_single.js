Template.comment.events({
    'click .fa-heart-o': function(event) {
        event.target.className = "fa fa-heart";
        // some logic save the change to database .......
    },
    'click .fa-heart': function(event) {
        event.target.className = "fa fa-heart-o";
        // some logic save the change to database .......
    },
    'keypress textarea': function(e) {
        e = e || event;
        if (e.keyCode === 13 && !e.ctrlKey) {
            var text = e.target.value;
        }
        return true;
    }
});
