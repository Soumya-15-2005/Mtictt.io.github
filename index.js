let mymusic=new Audio("/clock/music.mp3");

setInterval(()=>{
  let a=new Date();
  let h=a.getHours();
  let m=a.getMinutes();
  let s=a.getSeconds();
  let hrotation=30*h+m/2;
  let mrotation=6*m;
  let srotation=6*s;
  hour.style.transform=`rotate(${hrotation}deg)`;
  minutes.style.transform=`rotate(${mrotation}deg)`;
  seconds.style.transform=`rotate(${srotation}deg)`;
  mymusic.play();
},1000); 
