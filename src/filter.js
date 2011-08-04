if (localStorage['showNSFW'] == undefined) {
  localStorage['showNSFW'] = true
}

document.onreadystatechange = function(e) {
  if (document.readyState != "complete") return
  var showNSFWText = (localStorage['showNSFW'] == "true") ? 'on' : 'off'
  showHide()
 
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

// Warning: Since this works with NodeLists, changes will be made to the actual
// NodeList object (as opposed to Array.map() which returns a new Array
// object), so this is NOT a pure function, unlike most map() functions
NodeList.prototype.map = function(fn) {
  for (i in this) {
    fn(this[i])
  }
  return this
}

function toggleNSFW() {
  localStorage['showNSFW'] = localStorage['showNSFW'] == "true" ? "false" : "true"
  showHide()
}
function hide(element) {
  if (element.style != undefined) return element.style["display"] = "none"
}
function show(element) {
  if (element.style != undefined) return element.style["display"] = "inline"
}
function showHide() {
  if (localStorage['showNSFW'] == 'true') {
    document.querySelectorAll('.over18').map(show)
  } else {
    document.querySelectorAll('.over18').map(hide)
  }
}
window.addEventListener('hashchange', showHide)
