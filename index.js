/****************************************/
// Show Broser width on load & resize
/****************************************/

function showBrowserWidth() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  document.querySelector('h1').innerHTML = `Width: ${width}`;
}
window.onload = showBrowserWidth;
window.onresize = showBrowserWidth;
