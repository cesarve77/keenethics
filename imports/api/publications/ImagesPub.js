import Meteor from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('images', function() {
    return Images.find();
  });
}
