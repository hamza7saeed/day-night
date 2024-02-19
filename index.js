let head = document.head;
head.insertAdjacentHTML('afterbegin',"<title>day/night</title>");
let icon = document.createElement('link');
icon.rel = "icon";
icon.type = "image/x-icon";
icon.href = "https://static.vecteezy.com/system/resources/previews/011/670/875/original/day-and-night-flat-icon-free-vector.jpg"

let body = document.body;
// console.log(body.style.color = 'red');
// 🌚
let header = document.createElement("header");
header.innerHTML = "<h3>Day and night job agency</h3>";
header.insertAdjacentHTML('beforeend',"<button>🌚</button>")
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
header.style.gap = '40%';
let but = header.querySelector("button"); // button
but.style.height = '10%';
let day_nig = true;
but.addEventListener('click',function(){
    if(day_nig){
        moon()
    } else{
        sun()
    }
    day_nig = !day_nig
})

let sec = document.createElement("section");

sec.innerHTML = "<h3>My self</h3>";
let aboutSelf = document.createElement("p");
sec.insertAdjacentElement('beforeend',aboutSelf);
aboutSelf.innerText = "My name is hamza saeed. I am a student of post-graduate student. In my free time mostly, I do practice of coding which is also my passion. "


function moon(){
    body.style.backgroundColor = 'black';
body.style.color = '#FEFBF6';
but.innerText = '🌞';

}
function sun(){
    body.style.backgroundColor = '#FEFBF6';
body.style.color = '#000000';
but.innerText = '🌚';

}

head.appendChild(icon)
body.appendChild(header)
body.appendChild(sec)