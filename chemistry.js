<script>
function getOptions() {
  var x = document.getElementById("mySelect");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + " " + x.options[i].text;
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>
