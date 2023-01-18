const cursor = new MouseFollower({
    container: document.body,
    speed: 1
});


//add copyright text
const date = new Date();
const year = date.getFullYear();
const cm = document.createElement("h5");
cm.innerHTML = `© ${year} Hakkım helal olsun`;
const copyRight = document.querySelector(".copyright");
copyRight.append(cm);


const nameSurname = document.querySelector(".name-surname");

const profileImg = document.getElementsByClassName("profile-img");
const ns = document.createElement("h2");
const nsJob = document.createElement("h4");
const nsContent = document.createElement("p");
ns.innerHTML= `<h2 class="ns-title">Mehmet Ali <br>
&nbsp;&nbsp;Mergen</h2>
<hr>
`;
nsJob.innerHTML = '<h4 class="ns-job">Software Engineer</h4>';
nsContent.innerHTML = '<p>Experienced in web, mobile, and blockchain development. Seeking to create innovative software solutions</p>'

setTimeout(() => {
    nameSurname.append(ns);
    nameSurname.append(nsJob);
    nameSurname.append(nsContent);

    document.querySelector(".ns-title").addEventListener("mouseover", function(){
      this.classList.add("ns-title-out");
      this.classList.remove("ns-title");
    });
    
    document.querySelector(".ns-title").addEventListener("mouseout", function(){
      this.classList.remove("ns-title-out");
      this.classList.add("ns-title");
    });

    document.querySelector(".ns-job").addEventListener("mouseover", function(){
      this.classList.remove("ns-job");
      this.classList.add("ns-job-out");
    });
    
    document.querySelector(".ns-job").addEventListener("mouseout", function(){
      this.classList.add("ns-job");
      this.classList.remove("ns-job-out");
    });

    
}, "100");

let opacity = 0;
const interval = setInterval(function() {
  opacity += 0.1;
  ns.style.opacity = opacity;
  profileImg.opacity = opacity;
  if (opacity >= 32) {
    clearInterval(interval);
  }
}, 200);

let opacity2 = 0;
const interval2 = setInterval(function() {
  opacity += 0.1;
  nsJob.style.opacity = opacity;
  profileImg.opacity = opacity;
  if (opacity >= 92) {
    clearInterval(interval2);
  }
}, 400);

let opacity3 = 0;
const interval3 = setInterval(function() {
  opacity += 0.1;
  nsContent.style.opacity = opacity;
  profileImg.opacity = opacity;
  if (opacity >= 172) {
    clearInterval(interval3);
  }
}, 600);


const timgsNumbers = document.getElementsByClassName("timg").length;


for(var i=0; i< timgsNumbers; i++){
  document.querySelectorAll(".timg")[i].addEventListener("mouseover", function(){
    this.classList.remove("timg");
    this.classList.add("timg2");
  });
  document.querySelectorAll(".timg")[i].addEventListener("mouseout", function(){
    this.classList.remove("timg2");
    this.classList.add("timg");
  });
}



const icon = document.querySelector(".fa-moon-o");
icon.addEventListener("click", function(){

  //square
  const main = document.querySelector("#main");
  main.childNodes[1].classList.toggle("dark-square");

  //tech-exp-project
  const techBodies = document.querySelectorAll(".tech-body");
  const expBodies = document.querySelectorAll(".exp-body");
  const cardBodies = document.querySelectorAll(".card");
  for(var i=0; i<cardBodies.length; i++){
    if(i<3){
      techBodies[i].classList.toggle("dark-body");
    }
    if(i < 2){
      expBodies[i].classList.toggle("dark-body");
    }
    cardBodies[i].classList.toggle("dark-card-body");
  }

  //body
  document.body.classList.toggle("dark-body");

});

icon.addEventListener("mouseover", function(){
  icon.classList.add("moon-icon")
});

icon.addEventListener("mouseout", function(){
  icon.classList.remove("moon-icon");
});