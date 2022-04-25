setInterval(tik,1000);//1000ms ma krte raho

let h= document.getElementById('hour');
let m= document.getElementById('minute');
let s= document.getElementById('second');

function tik() {
    let d= new Date();
    let hrs= d.getHours();
    let min= d.getMinutes();
    let sec= d.getSeconds();

    let hrotation= 30*hrs + min/2 ;
    let mrotation= 6*min ;
    let srotation= 6*sec ;

    // h.rotate( (30*hrs + min/2)deg );
    // h.style.transform= rotate()
    // h.rotate(hrotation*deg);

    h.style.transform= `rotate(${hrotation}deg)`;
    m.style.transform= `rotate(${mrotation}deg)`;
    s.style.transform= `rotate(${srotation}deg)`;
}