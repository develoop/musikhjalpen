$(document).ready(function(){
  
  initForms();
  
});

/*** FORM FUNCTIONS ***/

function initForms(){
  
  attachFormEvents();
  
}

function attachFormEvents(){
  
  /*** SUBMIT start_collect FORM ***/ // ändra till namnet som brukar användas
  $('#start_collect button').click(function(e){

    var form    = $(this).parent('form');
    var action  = form.attr('action');

    $.post(action, form.serialize(), function(response){
      // öppna lightbox med delnings-möjligheter och tackmeddelande
      $.facebox(buildShareLightbox(response));
      
    });

    e.preventDefault();

  });

  /*** SUBMIT give_direct FORM ***/ // ändra till namnet som brukar användas
  $('#give_direct button').click(function(e){

    var form    = $(this).parent('form');
    var action  = form.attr('action');

    $.post(action, form.serialize(), function(response){
      // öppna lightbox med tackmeddelande
      $.facebox(buildThankYouLightbox(response));
      
    });

    e.preventDefault();

  });
  
}

function buildShareLightbox(data){
  
  var html = '\
    <img src="assets/img/mock.png" />\
    <div style="width:45%;float:left;padding-right:5px;">\
      <h3>TACK ' + data.name + '!</h3>\
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non posuere mauris. Sed blandit posuere sollicitudin. Vivamus eu sagittis velit. Cras ac libero id tortor condimentum ultricies. Praesent sit amet arcu augue. Donec in metus mauris, id euismod dolor. Donec neque mauris, euismod sed facilisis sit amet, viverra sed sapien. In hac habitasse platea dictumst. Aenean dictum varius justo, sit amet suscipit nisl consequat ut. Vestibulum et lobortis turpis.</p>\
    </div>\
    <div style="width:45%;float:left;padding-left:5px;">\
      <h3>Din insamling är nu startad!</h3>\
      <p>Din insamling finns nu <a href="' + data.url + '">här</a> men inga av dina vänner vet om den.</p>\
      <p>Berätta!</p>\
      <a href="share.to/facebook" class="icn facebook">Facebook</a>\
      <a href="share.to/twitter" class="icn facebook">Twitter</a>\
      <a href="share.to/sms" class="icn facebook">SMS</a>\
      <a href="share.to/email" class="icn facebook">E-post</a>\
    </div>\
  ';
  
  return html;
  
}

function buildThankYouLightbox(data){
  
  var html = '\
    <img src="assets/img/mock.png" />\
    <div style="width:100%;">\
      <h3>TACK ' + data.name + '!</h3>\
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non posuere mauris. Sed blandit posuere sollicitudin. Vivamus eu sagittis velit. Cras ac libero id tortor condimentum ultricies. Praesent sit amet arcu augue. Donec in metus mauris, id euismod dolor. Donec neque mauris, euismod sed facilisis sit amet, viverra sed sapien. In hac habitasse platea dictumst. Aenean dictum varius justo, sit amet suscipit nisl consequat ut. Vestibulum et lobortis turpis.</p>\
    </div>\
  ';
  
  return html;
  
}