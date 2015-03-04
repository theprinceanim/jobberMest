// Template.registerHelper('projects',function(){
// 	// console.log(Projects.find().fetch());

// 	// Array is 'naturally' returned by date created. Now the order's reversed.
// 	return Projects.find().fetch().reverse();
// })

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

// Template.form.events({
// 	'submit form': function (e,t) {

// 		//Prevent page from reloading
// 		e.preventDefault();

// 		project = {
// 			title: $('input').val(),
// 			category: $('input').val(),
// 			summary: $('input').val(),
// 			contact: $('input').val(),
// 			payment: $('input').val(),
// 			paymentType: $('input').val(),
// 			dueDate: $('input').val()
// 		}

// 		//Check that 'name' is not an empty string
// 		if (project.title){

// 			//Insert new doc into 'Things' collection
// 			Projects.insert(project);
// 		}

// 		//reset form
// 		$('input[type=text]').val('');
// 	}
// });
 AutoForm.addHooks(null, {
    onError: function (operation, error, template) {
      console.log('Error: ' + error);
    }
  });


