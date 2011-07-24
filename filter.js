if (localStorage['showNSFW'] == undefined) {
  localStorage['showNSFW'] = true
}

$(document).ready(function() {
  var showNSFW = localStorage['showNSFW']
  var showNSFWText = showNSFW == "true" ? 'on' : 'off'
  if (showNSFW == 'false') $('.over18').hide()
  
  $('a.pref-lang').parent().parent()
    .after('<a href="javascript:void(0);" id="toggleNSFW">[NSFW ' + showNSFWText + ']</a>')
    .after('<span class="separator">|</span>')
    
    
  $('#toggleNSFW').click(function(e) {
    toggleNSFW()
    $(this).text('[NSFW ' + (localStorage['showNSFW'] == "true" ? 'on' : 'off') + ']')
  })
})
function toggleNSFW() {
  localStorage['showNSFW'] = localStorage['showNSFW'] == "true" ? "false" : "true"
  if (localStorage['showNSFW'] == "true") {
    $('.over18').show()
  } else {
    $('.over18').hide()
  }
}
