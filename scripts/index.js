const cursor = new MouseFollower({
    container: document.body,
    speed: 1
});


//add copyright text
const date = new Date();
const year = date.getFullYear();
const cm = document.createElement("h5");
cm.innerHTML = `© ${year} MAM. ALL RIGHTS RESERVED`;
const copyRight = document.querySelector(".copyright");
copyRight.append(cm);


const nameSurname = document.querySelector(".name-surname");

const profileImg = document.getElementsByClassName("profile-img");
const ns = document.createElement("h2");
ns.innerHTML= `<h2>Mehmet Ali <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mergen</h2>
<hr>
<h4>Software Engineer</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem nobis ex sed nesciunt velit consequatur suscipit, quibusdam eveniet rem!</p>
`;

setTimeout(() => {
    nameSurname.append(ns);
}, "100")


  
let opacity = 0;
const interval = setInterval(function() {
  opacity += 0.1;
  ns.style.opacity = opacity;
  profileImg.opacity = opacity;
  if (opacity >= 32) {
    clearInterval(interval);
  }
}, 200);
