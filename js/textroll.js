r = 100;
adjustJank = 4;

// Set up for what appears to be an seamless stream of text
$('.wrapper h1').each( function(){
  var obj = $(this);
  var d = obj.width();
  obj.clone().appendTo( obj.parent() );
  //obj.parent().parent().width( d );
  var t = d/r;
    TweenMax.to(
        obj.parent(),
        t,  // our calculated time
        {
         x: "-"+(d+adjustJank),
         ease: Linear.easeNone,
         repeat: -1,
        }
    );
  });