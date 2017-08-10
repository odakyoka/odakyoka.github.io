

$(function(){
  $('.firstModal').on('click', function(event){
    event.preventDefault();
    $('#overlay, .moAszoo')
        .hide('.moHoiku')
    .fadeIn()
    .find('.moAszoo')
    .fadeIn();
  });
  $(".modalClose, #overlay").on('click', function(event){
    event.preventDefault();
    $('#overlay, #modal')
    .fadeOut()
    .find('.moAszoo')
    .fadeOut()
  });
});

$(function(){
  $('.secondModal').on('click', function(event){
    event.preventDefault();
    $('#overlay, #modal')
    .hide('.moAszoo')
    .fadeIn()
    .find('.moHoiku')
    .fadeIn();
  });
  $(".modalClose, #overlay").on('click', function(event){
    event.preventDefault();
    $('#overlay, .moHoiku')
    .fadeOut()
    .find('#modal')
    .fadeOut()
  });
});


// $(function(){
//   $('.firstModal').on('click', function(event){
//     event.preventDefault();
//     $('#modal, #overlay')
//     .fadeIn()
//     .find('#modal, .moAszoo')
//     .fadeIn();
//   });
//   $(".modalClose, #overlay").on('click', function(event){
//     event.preventDefault();
//     $('#modal, #overlay')
//     .fadeOut()
//     .find('#modal')
//     .fadeOut()
//   });
// });

// $(function(){
//   $('.secondModal').on('click', function(event){
//     event.preventDefault();
//     $('#overlay, .moHoiku')
//     .hide('.moAszoo')
//     .fadeIn()
//     .find('#modal, .moHoiku')
//     .fadeIn();
//   });
//   $(".modalClose, #overlay").on('click', function(event){
//     event.preventDefault();
//     $('#overlay, .moHoiku')
//     .fadeOut()
//     .find('#modal, .moHoiku')
//     .fadeOut()
//   });
// });



$(function() {
  $("#overlay, #modal").hide();
});



$(function() {
 
  //マウスを乗せたら発動
  $('.modalClose').hover(function() {
    $(this).css('background', '#c00');
  }, function() {
    $(this).css('background', '');
  });
});
