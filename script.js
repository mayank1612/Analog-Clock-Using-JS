setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime + stime / 10;
  srotation = 6 * stime;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  var audio = new Audio("sound.mp3");
  audio.play();

  dd = new Date();
  dhtime = dd.getHours();
  dmtime = dd.getMinutes();
  dstime = dd.getSeconds();
  dhour.innerHTML = `${dhtime} :`;
  dminute.innerHTML = `${dmtime}:`;
  dsecond.innerHTML = `${dstime}`;
}, 1000);
