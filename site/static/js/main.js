var a_list = [ "hey", "Think Differently", "Expect Less", "Ask More" ];
var index = 0;

function hey() {
  $("#heythere").html("Hello World!");
  var message = a_list[index];
  $("#heythere").html(message);
  index = index + 1;
  if (index >= a_list.length)
    index = 0;
  }
 };
 $(document).ready(function(){
   $("#heythere").click(hey);
 });
 
 


