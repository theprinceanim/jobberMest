Projects = new Mongo.Collection('projects');
Projects.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },

    // Defining category and giving it options
     category: {
        type: String,
        autoform: {
            options: function(){
                return [
                    {value: 'business', label: 'Business'},
                    {value: 'technology', label: 'Technology'},
                    {value: 'communication', label: 'Communication'}
                ]
            }
        }
    },
    picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    }   
    },  owner: {
        type: String,
        autoform: {
            omit: true
                },
                 autoValue: function(){
            return Meteor.userId();
        }
            },

    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000,
        autoform: {
            rows: 5
        }
    },
    contact: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Contact Email"
    },
    payment: {
        type: Number,
        label: "Payment",
        min: 0
    },
    paymentType: {
        type: String,
        label: "Payment Type",
        autoform: {
            options: [{
                label: "Hourly",
                value: "hourly"
            }, {
                label: "Whole thing",
                value: "project"
            }]
        }
    },
    dueDate: {
        type: Date,
        label: "Due by",
        optional: true
    }
}));