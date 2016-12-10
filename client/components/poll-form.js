Template.pollForm.events({
   // handle the form submission
   'submit form': function(event){
       // Prevent form from submitting
       event.preventDefault();
       
       // Get data we need from form
       var newPoll = {
           question: event.target.question.value,
           choices: [
               { text: event.target.choice1.value, votes: 0 },
               { text: event.target.choice2.value, votes: 0 },
               { text: event.target.choice3.value, votes: 0 }
            ]
       };
       
       Polls.insert(newPoll);
   }
   
});