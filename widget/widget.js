(function(){
  
  var jQuery;
  
  if(window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7.1'){
    var jq = document.createElement('script');
    jq.type = 'text/javascript';
    jq.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    
    if(jq.readyState){
      jq.onreadystatechange = function(){
        if(this.readyState == 'complete' || this.readyState == 'loaded'){
          scriptLoadHandler();
        }
      }
    } else {
      jq.onload = scriptLoadHandler;
    }
    
    document.getElementsByTagName('head')[0].insertBefore(jq, document.getElementsByTagName('script')[0]);
    
  } else {
    jQuery = window.jQuery;
    init();
  }
  
  function scriptLoadHandler(){
    jQuery = window.jQuery.noConflict(true);
    init();
  }
  
  /****** THE WIDGET ******/
  
  function init(){
    
    injectStyleSheets();
    
    // Hämta id:t från widget.js?id=?
    var id = getId();
    
    requestData(id);
    
  }
  
  function injectStyleSheets(){
    
    var css = jQuery('<link>', {
      rel: "stylesheet",
      type: "text/css",
      href: "css/widget.css" // kommer vara http://www.ihelp.se/musik/widget/css/widget.css
    });
    css.appendTo('head');
    
  }
  
  function getId(){
    var id = null;
    
    jQuery('script').each(function(){
      var script = this;
      if(!script.src){
        return;
      }
      
      var match = script.src.match(/widget\.js\?id=([0-9]+)/); // kommer vara match(/http:\/\/www\.ihelp\.se\/musik\/widget\/widget\.js\?id=([0-9]+)/)
      
      if(match){
        id = match[1];
      }
    });
    
    return id;
    
  }
  
  function requestData(id){
    jQuery.ajax({
      url: 'classes/widget.class.php?id=' + id,
      dataType: 'jsonp',
      success: function(data){
        renderWidget(data);
      }
    });
  }
  
  // Byt ut insamling mot saldo senare
  
  function renderWidget(data){
    jQuery('#musikhjalpen-widget').append('\
      <div class="widget-container">\
        <h3>' + data.namn + '</h3>\
        <a href="' + data.url + '">' + data.url + '</a>\
        <span>Insamlat hittills:<b>' + data.insamling + '</b></span><br />\
        <a class="button" href="http://www.ihelp.se/inamlingsskript.php?id=' + data.id + '">Hjälp till</a>\
      </div>\
    ');
  }
  
})();