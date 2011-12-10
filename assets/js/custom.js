$(document).ready(function(){
  
  initForms();
  
  initToplist();
  
});

/*** FORM FUNCTIONS ***/

function initForms(){
  
  attachFormEvents();
  
}

function attachFormEvents(){
  
  $('form').validationEngine('attach');
  
  /*** SUBMIT start_collect FORM ***/ // ändra till namnet som brukar användas
  $('#start_collect button').click(function(e){

    var form    = $(this).parent('form');
    var action  = form.attr('action');
    
    if(validateForm(form)){
      $.post(action, form.serialize(), function(response){
        // öppna lightbox med delnings-möjligheter och tackmeddelande
        $.facebox(buildShareLightbox(response));

      });
    }
    
    e.preventDefault();

  });

  /*** SUBMIT give_direct FORM ***/ // ändra till namnet som brukar användas
  $('#give_direct button').click(function(e){

    var form    = $(this).parent('form');
    var action  = form.attr('action');
    
    if(validateForm(form)){
      $.post(action, form.serialize(), function(response){
        // öppna lightbox med tackmeddelande
        $.facebox(buildThankYouLightbox(response));

      });
    }

    e.preventDefault();

  });
  
}

function buildShareLightbox(data){
  
  var html = '\
    <div class="facebox-header"><h3>Musikhjälpen 2011</h3></div>\
    <div class="facebox-content">\
      <div style="width:45%;float:left;padding-right:5px;">\
        <h3>TACK!</h3>\
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
      <div class="cf"></div>\
    </div>\
  ';
  
  return html;
  
}

function buildThankYouLightbox(data){
  
  var html = '\
    <div class="facebox-header"><h3>Musikhjälpen 2011</h3></div>\
    <div class="facebox-content">\
      <div style="width:98%;">\
        <h3>TACK!</h3>\
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non posuere mauris. Sed blandit posuere sollicitudin. Vivamus eu sagittis velit. Cras ac libero id tortor condimentum ultricies. Praesent sit amet arcu augue. Donec in metus mauris, id euismod dolor. Donec neque mauris, euismod sed facilisis sit amet, viverra sed sapien. In hac habitasse platea dictumst. Aenean dictum varius justo, sit amet suscipit nisl consequat ut. Vestibulum et lobortis turpis.</p>\
      </div>\
    </div>\
  ';
  
  return html;
  
}

function validateForm(form){
  
  form.validationEngine('attach');
  
  return form.validationEngine('validate');
  
}

/******* TOPLIST *******/

function initToplist(){
  
  fetchList(3, function(response){
    
    $('#toplist').append(buildList(response));
    
    attachToplistEvents();
    
  });
  
}

function fetchList(count, callback){
  
  $.getJSON('php/test.php?count=' + count, function(data){
    callback(data);
  });
  
}

function buildList(data){
  
  var html = '';
  
  $.each(data, function(key, val){
    html += '\
        <li data-id="' + key + '">\
          <h3 class="position">#' + val.position + '</h3>\
          <h3>' + val.name + '</h3>\
          <h3>' + val.collected + '</h3>\
          <p class="click_to_help">Klicka för att hjälpa ' + val.name + '</p>\
        </li>\
    ';
  });
  
  return html;
}

function attachToplistEvents(){
  
  $('#toplist li').click(function(){
    
    var id = $(this).attr('data-id');
    
    buildDetailsLightbox(id);
    
  });
  
  $('a.show_more').click(function(){
    
    fetchList(100, function(response){
      
      $.facebox('\
        <div class="facebox-header"><h3>Musikhjälpen 2011</h3></div>\
        <h3>Blogglistan</h3>\
        <div class="facebox-content">\
          <ul id="facebox-toplist">\
            ' + buildList(response) + '\
          </ul>\
        </div>\
      ');
      
      $('#facebox li').click(function(){
        
        var id = $(this).attr('data-id');
        
        buildDetailsLightbox(id);
        
      });
      
    });
    
  });
  
}

function buildDetailsLightbox(id){
  
  $.getJSON('php/test.php?id=' + id, function(data){
    
    $.facebox('\
      <div class="facebox-header"><h3>Musikhjälpen 2011</h3></div>\
      <div class="facebox-content">\
        <div style="width:50%;float:left;">\
          <h3>' + data.name + '</h3>\
          <h3>' + data.collected + '</h3>\
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, ante in sollicitudin facilisis, purus lacus volutpat justo, a tristique.</p>\
        </div>\
        <div style="width:50%;float:left;">\
          <p>Bidra till denna insamling</p>\
          <form name="give_direct_to" id="give_direct_to" action="php/formhandler.php">\
            <input type="text" name="mobile" id="mobile_direct_to" placeholder="MOBILNUMMER" class="validate[required]" />\
            <button type="submit" id="send_button" class="fr">Skicka</button>\
          </form>\
        </div>\
        <div class="cf"></div>\
      </div>\
    ');
    
    $('#facebox form').validationEngine('attach');

    $('#facebox form button').click(function(e){

      var form    = $(this).parent('form');
      var action  = form.attr('action');

      if(validateForm(form)){
        $.post(action, form.serialize(), function(response){
          $.facebox(buildThankYouLightbox(response));
        });
      }

      e.preventDefault();

    });
    
  });
  
}