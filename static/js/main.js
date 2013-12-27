function hey() {
  $("#heythere").html("Hello World!");
};

$(document).ready(function(){
  $("#heythere").click(hey);
});

