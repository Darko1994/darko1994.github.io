$(document).foundation()
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 1) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});
$(document).ready(function () {
$(window).scroll(function() {
   var hT = $('.third-margins').offset().top,
       hH = $('.third-margins').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
      
      $('.third-margins').addClass('third-animation');
    } 
  });
});

$('a[href^="#"]').on('click', function () {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});
var typedOptions = {
  stringsElement: $('#typed-strings'),
  typeSpeed: 30,
  loop: true,
  showCursor: false,
};
$(document).scroll(function () {
  $('#typing-text').typed(typedOptions);
  $(document).off('scroll');
});


function clearFields() {
  $('#myText').val("");
}

function addText() {
  if ($('#myText').value  != "") {
    document.getElementById('typed-strings').innerHTML += '<p class="P-inline">'
      + document.getElementById('myText').value 
      + '</p><button type="button" class="press fa fa-times-circle"></button><br>';
        $('.default').remove();
      $("#typing-text").typed(typedOptions);
  }
};
$('#somebutton').on('click', function(){
    addText();
    clearFields();
});

$('#typed-strings').on('click', ".press", function () {
    $(this).prev().remove();
    $(this).next().remove();

    $(this).remove();
    $("#typing-text").typed(typedOptions);
    if ($('#typed-strings').children().length < 1) {
      $('#typed-strings').html(
      '<p class="default">This is the default text.</p><p class="default">How about u write something yourself.</p>'
      )};$("#typing-text").typed(typedOptions);
});


jQuery(document).ready(function($) {
			$('.my-slider').unslider({
        autoplay: true,
        speed:800,
        infinite: true,
        arrows: {
      	prev: '<a class="unslider-arrow prev"></a>',
      	next: '<a class="unslider-arrow next"></a>',
      }
    });
	});