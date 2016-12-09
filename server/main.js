import { Meteor } from 'meteor/meteor';

// code to run on server at startup
Meteor.startup(() => {
    // if there are no available polls create sample data
    
    if (Polls.find().count() === 0){
        
        // Create sample polls
        var samplePolls = [
            {
                question: 'Is Meteor awesome?',
                choices: [
                    {text: 'Of course!', votes: 0},
                    {text: 'Eh', votes: 0},
                    {text: 'No I like plain JS', votes: 0}
                ]
            },
            {
                question: 'Is CSS3 Flexbox great?',
                choices: [
                    {text: 'Of course!', votes: 0},
                    {text: 'Eh', votes: 0},
                    {text: 'Nah', votes: 0}
                ]
            }
        ];
        
        // Loop over each sample poll and insert into database
        _.each(samplePolls, function(poll){
            Polls.insert(poll);
        });
    }
    
});

// You can run Polls.find().fetch() from browser
