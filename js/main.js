let show = document.getElementById('show');
let list = document.getElementById('list');
let hLinks = document.querySelectorAll('#hLink')
show.onclick= function(){
    list.classList.toggle("hidden");
}

var typed = new Typed('#MB_txt', {
    strings: ['Developer'],
    smartBackspace: true, // Default value
    showCursor: false,
    typeSpeed: 200,
    loop: true,
    backSpeed: 200,
  });

  hLinks.forEach(link=>{
    link.onclick= function(){
        list.classList.toggle("hidden");
    }
  })