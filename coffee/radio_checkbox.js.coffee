$ ->
  $('input[type="radio"], input[type="checkbox"]').on "change", ->
    $el = $(this)
    $label = $el.closest("label")

    if $el.attr("type") is "radio"
      $similar = $el.closest("form").find("input[name=\"" + $el.attr("name") + "\"]")
      $similar.closest("label").removeClass "checked"

    if $el.is(":checked")
      $label.addClass "checked"
    else
      $label.removeClass "checked"
