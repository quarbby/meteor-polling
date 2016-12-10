import { Template } from 'meteor/templating';

Template.body.helpers({
   
   polls: function() {
       return Polls.find();
   } 
   
});

// Adds index array to each item
Template.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});