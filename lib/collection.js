dramaList = new Mongo.Collection("dramaList");
comment = new Mongo.Collection('comment');

if (Meteor.isServer) {
    Meteor.startup(function() {
        Meteor.methods({
            dramaListRemoveAll: function() {
                dramaList.remove({});
            },
            dramaListUpdate: function(object1, object2){
            	dramaList.update(object1,object2);
            }
        });
    });
}
