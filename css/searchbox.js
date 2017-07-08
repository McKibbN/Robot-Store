function search() {
  var search = $(".searchbox").val().toLowerCase();
  switch (search) {
    case "r":
    case "r.":
    case "r.e":
    case "r.e.":
    case "r.e.t":
    case "r.e.t.":
    //Only show good dog
      $(".robo2").addClass("hidden");
      $(".robo3").addClass("hidden");
      $(".robo1").removeClass("hidden");
      break;
    case "b":
    case "bu":
    case "but":
    case "butl":
    case "butle":
    case "butler":
    case "butler.":
    case "butler.b":
    case "butler.bo":
    case "butler.bot":
    //Only show slave
      $(".robo1").addClass("hidden");
      $(".robo3").addClass("hidden");
      $(".robo2").removeClass("hidden");
      break;
    case "m":
    case "me":
    case "meg":
    case "mega":
    case "mega ":
    case "mega m":
    case "mega ma":
    case "mega man":
    //Only show Blue Bomber
      $(".robo1").addClass("hidden");
      $(".robo2").addClass("hidden");
      $(".robo3").removeClass("hidden");
      break;
    case "":
    case " ":
      $(".robo1").removeClass("hidden");
      $(".robo2").removeClass("hidden");
      $(".robo3").removeClass("hidden");
      break;
    default:
      $(".robo1").addClass("hidden");
      $(".robo2").addClass("hidden");
      $(".robo3").addClass("hidden");
      break;
  }
}
