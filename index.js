
$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});

$(".sign").on('click',function(){
  $('.heading').text("Sign-Up Form");
});

$(".log").on('click',function(){
  $('.heading').text("Login Form");
});
