### JavaScript Code Snippets

> This repo contains JavaScript code snippets that can be used to write your own JavaScript code. These snippets are short simple & easy to use! So don't hesitate to have a look & copy them!

**I will try to add more snippets here as soon as possible! 😅🥂**

```javascript
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
```
