// Template.registerHelper('isOwner', function(owner) {
// 	// body...
// 	if(owner == Meteor.userId())
// 		return true;
// })
Template.registerHelper('User', function(){
	return Meteor.user()
})

Template.registerHelper('getImg', function(picture){
	return Images.findOne(picture).url();
})