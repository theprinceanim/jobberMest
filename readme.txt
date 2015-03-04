<template name="projectDetail">
<div class="container">
	<div class="row">
		<div class="col-md-3"></div>





		<div class="col-md-6 column productbox">
     <img src="http://mestghana.wpengine.com/wp-content/themes/wpbootstrap/images/mest-logo.png" class="img-responsive">
    <div class="producttitle">{{project.title}}<h5>({{project.category}})</h5></div>
    <div class="productbody">{{project.summary}}</div>
    <div class="productbody">{{project.contact}}</div>
    <div class="productbody">{{project.payment}}</div>
    <div class="productbody">{{project.paymentType}}</div>
    <div class="productbody">{{project.dueDate}}</div>
    <div class="productprice">

    <div class="pull-right"><!-- <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="btn btn-success" role="button">APPLY</a> --> <a href="{{pathFor 'projectDetail' _id=_id}}" class="btn btn-primary btn-xs">{{#afModal class="btn" collection="Projects" operation="insert"}}
            APPLY
            {{/afModal}}

            {{> autoformModals collection="Projects" id="insertProject" type="insert"}}</a>
    </div>
    <div class="pricetext">
    {{#if currentUser}}
    {{#afModal class="btn btn-danger" collection="Projects" operation="remove" doc=_id}}
  	Delete post
	{{/afModal}}
	{{#afModal class="btn btn-primary" collection="Projects" operation="update" doc=_id}}
 	 Update post
	{{/afModal}}
    {{/if}}
		</div></div>
    
    </div>











            <div class="col-md-3"></div>
        </div>
        
    </div>

</template>	
