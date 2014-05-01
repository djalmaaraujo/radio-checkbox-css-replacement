$(function() {
  $('input[type="radio"], input[type="checkbox"]').on("change", function() {
    var $el, $label, $similar;
    $el = $(this);
    $label = $el.closest("label");

    if ($el.attr("type") === "radio") {
      $similar = $el.closest("form").find("input[name=\"" + $el.attr("name") + "\"]");
      $similar.closest("label").removeClass("checked");
    }
    if ($el.is(":checked")) {
      $label.addClass("checked");
    } else {
      $label.removeClass("checked");
    }
  });
});
