if (localStorage['showNSFW'] == undefined) {
  localStorage['showNSFW'] = true
}

document.onreadystatechange = function(e) {
  if (document.readyState != "complete") return
  var showNSFW = localStorage['showNSFW']
  var showNSFWText = showNSFW == "true" ? 'on' : 'off'
  if (showNSFW == 'false') {
    map(document.querySelectorAll('.over18'), function(x) {console.log(x.style)})
    map(document.querySelectorAll('.over18'), hide)
  }
 
  var toggleLink = document.createElement("a")
  toggleLink.href = "javascript:void(0)"
  toggleLink.id = "toggleNSFW"
  toggleLink.innerText = "[NSFW " + showNSFWText + "]"
  
  var separator = document.createElement("span")
  separator.className = "separator"
  separator.innerText = "|"
  
  var preferences = document.querySelector('a.pref-lang').parentNode.parentNode
  preferences.parentNode.insertBefore(toggleLink, preferences.nextSibling)
  preferences.parentNode.insertBefore(separator, toggleLink)
  
    
    
  document.querySelector('#toggleNSFW').addEventListener('click', function(e) {
    toggleNSFW()
    this.innerText = '[NSFW ' + (localStorage['showNSFW'] == "true" ? 'on' : 'off') + ']'
  }, false)
}
function toggleNSFW() {
  localStorage['showNSFW'] = localStorage['showNSFW'] == "true" ? "false" : "true"
  if (localStorage['showNSFW'] == "true") {
    map(document.querySelectorAll('.over18'), show)
  } else {
    map(document.querySelectorAll('.over18'), hide)
  }
}

function map(xs, fn) {
  var newArr = []
  for (i in xs) {
    newArr.push(fn(xs[i]))
  }
  return newArr
}
function hide(element) {
  if (element.style != undefined) return element.style["display"] = "none"
}
function show(element) {
  if (element.style != undefined) return element.style["display"] = "inline"
}
