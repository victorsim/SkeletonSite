var a_list = [ "hey", "poop", "gonzo" ];
var index = 0;

function hey() {
  var message = a_list[index];
  $("#heythere").html(message);
  index = index + 1;
  if (index >= a_list.length) {
    index = 0;
  }
};

$(document).ready(function(){
  $("#heythere").click(hey);
});

