function sniper(selector, mode) {
  if(!mode) mode = "javascript"
  var options = {
    mode: mode,
    lineNumbers: true,
    viewportMargin: Infinity,
  }
  var editor = d3.select(selector).select(".editor");
  var cm = CodeMirror(editor.node(), options);
  var snippet  = d3.select(selector).select("snippet");
  var text = snippet.text()
  cm.setValue(text);
}
