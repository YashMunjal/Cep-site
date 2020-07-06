var a = 0;
$(window).scroll(function() {

  var oTop = $('#showcase').offset().top - window.innerHeight;
  
  if ($(window).scrollTop() > oTop) {
    console.log('hello');
    };
});
