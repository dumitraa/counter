const date = document.getElementById('date');
 const time = document.getElementById('time');
var options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
};

setInterval(counter, 1)

function counter() {
  var d = new Date();
  let ms = d.getMilliseconds();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  h = h <= 9 ? '0' + h : h
  m = m <= 9 ? '0' + m : m;
  s = s <= 9 ? '0' + s : s;
  ms = ms <= 9 ? '0' + ms : ms;
  ms = ms <= 99 ? '0' + ms : ms;
  time.innerHTML = h + ':' + m + ":" + s + ":" + ms

  var currentDate = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.innerHTML = currentDate.toLocaleDateString('en-EN', options)
}










