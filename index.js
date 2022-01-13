var number = $(".num");
var display = $("#display");
var backspace = $("#backspace");
var delete_num = $('#display span:last-child')

var count = 0;

number.on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    display.append('<span>' + num.trim() + '</span>');

    count++
  }
});

backspace.on('click', function() {
  $('#display span:last-child').remove();
  count--;
});
