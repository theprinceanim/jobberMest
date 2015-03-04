Applications = new Mongo.Collection('applications');
Applications.attachSchema(new SimpleSchema({

    // Defining category and giving it options
     owner: {
        type: String,
        autoform: {
            omit: true
                },
                 autoValue: function(){
            // return Meteor.userId();
             if (this.isInsert){
                return Meteor.userId();
            }
        }
            },

    project: {
        type: String,
        autoform: {
            omit: true
                }
        },
        //          autoValue: function(){
        //     return Meteor.userId();
        // }
        //     },

    description: {
        type: String,
        label: "Description",
        optional: true,
        max: 1000,
        autoform: {
            rows: 5
        }
    },

    contact: {
        type: String,
        label: "Contact",
        optional: true,
        max: 100,
        autoform: {
            rows: 1
        }
    }
    
    // contact: {
    //     type: String,
    //     regEx: SimpleSchema.RegEx.Email,
    //     label: "Contact Email"
    // },
    // payment: {
    //     type: Number,
    //     label: "Payment",
    //     min: 0
    // },
    // paymentType: {
    //     type: String,
    //     label: "Payment Type",
    //     autoform: {
    //         options: [{
    //             label: "Hourly",
    //             value: "hourly"
    //         }, {
    //             label: "Whole thing",
    //             value: "project"
    //         }]
    //     }
    // },
    // dueDate: {
    //     type: Date,
    //     label: "Due by",
    //     optional: true
    // }
}));