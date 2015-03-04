AutoForm.hooks({
  addProject: {
    onSuccess: function(operation, result, template) {
      Router.go('projects');
    },
    onError: function(operation, error, template) {
      alert(error);
    }
    // formToDoc: function(doc, ss, formId) {
    //   console.log(doc);
    //   doc.owner = Meteor.userId();
    //   console.log(doc);
    //   return doc;
    // }
  }
});
AutoForm.hooks({
 insertApplication: {
    onSuccess: function(operation, result, template) {
      Router.go('projects');
    },
    onError: function(operation, error, template) {
      alert(error);
    }
    // formToDoc: function(doc, ss, formId) {
    //   console.log(doc);
    //   doc.owner = Meteor.userId();
    //   console.log(doc);
    //   return doc;
    // }
  }
});

 Template.projects.helpers({
    docs: function () {
      return Projects.find();
    },
    onError: function () {
      return function (error) { alert("BOO!"); console.log(error); };
    },
    onSuccess: function () {
      return function (result) { alert("YAY!"); console.log(result); };
    },
    beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete "' + doc.title + '"?')) {
          this.remove();
        }
      };
    }
  });