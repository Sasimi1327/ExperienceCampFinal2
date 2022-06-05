$(document).ready(function () {
  let clickVal = null;
  let basic_user = $(".basic_user").find("span");
  let basic_cost = $(".basic_cost").find("span");
  let standard_user = $(".standard_user").find("span");
  let standard_cost = $(".standard_cost").find("span");

  $("button").click(function () {
    clickVal = $(this).val();
    let total_user = 10000 + (clickVal - 1) * 5000;
    let basic_price = 600 - (clickVal - 1) * 100;
    let standard_price = basic_price + 1000;
    switch (clickVal) {
      case "1":
        basic_user.text(total_user);
        standard_user.text(total_user);
        basic_cost.text(basic_price);
        standard_cost.text(standard_price);
        break;
      case "2":
        basic_user.text(total_user);
        standard_user.text(total_user);
        basic_cost.text(basic_price);
        standard_cost.text(standard_price);
        break;
      case "3":
        basic_user.text(total_user);
        standard_user.text(total_user);
        basic_cost.text(basic_price);
        standard_cost.text(standard_price);
        break;
      case "4":
        basic_user.text(total_user);
        standard_user.text(total_user);
        basic_cost.text(basic_price);
        standard_cost.text(standard_price);
        break;
      case "5":
        basic_user.text(">25000");
        standard_user.text(">25000");
        basic_cost.text(basic_price);
        standard_cost.text(standard_price);
        break;
      default:
    }
  });

  $(".try-it").click(function (e) {
    e.preventDefault();
  });
  $(".btn-toTop").click(function (e) {
    $(this).scrollTop(0);
  });
});
