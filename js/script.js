// ..............................typing animation Start Here..................................

var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "Front-End Developer"],
  typeSpeed: 200,
  BackSpeed: 60,
  loop: true
})


// ..............................Aside Section Start Here..................................

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i])
}