(function($){
  
  init();
  
  function init(){
    
    fetchList(3, function(response){
      
      $('#toplist a').before(buildList(response));
      
      attachEvents();
      
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
          <h3>#' + val.position + ' ' + val.name + '</h3>\
          <h4>' + val.collected + '</h4>\
          <p>Klicka för att hjälpa ' + val.name + '</p>\
        </li>\
      ';
    });
    
    return html;
  }
  
  function attachEvents(){
    
    $('#toplist li').click(function(){
      
      var id = $(this).attr('data-id');
      
      buildDetailsLightbox(id);
      
    });
    
    $('#toplist a').click(function(){
      
      fetchList(100, function(response){
        
        $.facebox(buildList(response));
        
      });
      
    });
    
  }
  
  function buildDetailsLightbox(id){
    
    $.getJSON('php/test.php?id=' + id, function(data){
      
      $.facebox('\
        <h3>' + data.name + '</h3>\
        <div style="width:50%;float:left;">\
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ipsum diam. Aenean commodo lobortis fringilla. Pellentesque rhoncus aliquet lectus.</p>\
        </div>\
        <div style="width:50%;float:left;">\
          <p>Hittills insamlat:</p>\
          <h3>' + data.collected + '</h3>\
          <p>Skänk 50kr direkt</p>\
          <form name="give_direct" action="somescript.php">\
            <label for="mobile">Mobilnummer</label>\
            <input type="text" name="mobile" id="mobile" />\
            <button type="submit">Skicka</button>\
          </form>\
      ');
      
    });
    
  }

  
})(jQuery);