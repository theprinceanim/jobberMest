Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});


Router.route('/projects', function () {
  this.render('projects');
}, {
  name: 'projects',
  data: function(){
  	return{
  		projects: Projects.find().fetch().reverse(),
      business: Projects.find({category: "business"}).fetch().length,
      technology: Projects.find({category: "technology"}).fetch().length,
      communication: Projects.find({category: "communication"}).fetch().length
  	}
  }
});

// Creating routes to call the parameter category and display

Router.route('/projects/:category/', function(){
	this.render('projects'); //calling projects template
}, {
	name: 'projectsCategory',
	data: function(){
		return{
			projects: Projects.find({category: this.params.category}).fetch(),//finding a category based on a parameter
			business: Projects.find({category: "business"}).fetch().length,
      technology: Projects.find({category: "technology"}).fetch().length,
      communication: Projects.find({category: "communication"}).fetch().length
		}
	}
});

Router.route('/projects/details/:_id', function(){
	this.render('projectDetail');
	}
, {
	name: 'projectDetail',
	data: function(){
		var _id = this.params._id;
		return{
			project: Projects.findOne(_id),
			applications: Applications.find({project: _id}).fetch(),
			applicationsCount: Applications.find({project:_id}).count()
		}
	}
})

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});

Router.route('/form', function () {
  this.render('form');
}, {
  name: 'form'
});

Router.route('/dashboard', function () {
  this.render('dashboard');
}, {
  name: 'dashboard',
  data: function(){
  	return {
  		projects: Projects.find({owner: Meteor.userId()}).fetch(),
  		hasProjects: Projects.find({owner: Meteor.userId()}).count() 
  	}
  }
});