const data = [
  {
    img: "./images/img1.png",
    name: "john  elart",
    job: "computer assistant at econet",
    description:
      "He did Computer science at Summit Internation Institute and and he selected to be the best learner of the year",
  },
  {
    img: "./images/img2.png",
    name: "Dise  alex",
    job: "MIT computer teacher since 2000",
    description: "She wrote 5 books. 2 books in datastructure and algorithm",
  },
  {
    img: "./images/img3.png",
    name: "Williiam smith",
    job: "DG at econet",
    description:
      "William is remarkable software developer. He worked on mulptile projects including Ecocash",
  },
  {
    img: "./images/img4.png",
    name: "Philip Alexis",
    job: "Minister of Federal",
    description:
      "The Ministry of Federal Education and Professional Training is a federal ministry of Government.",
  },
  {
    img: "./images/img5.png",
    name: "Wayne Doris",
    job: "DG in DET",
    description: "He has leading Digital Education Transformation since 2015",
  },
  {
    img: "./images/img6.png",
    name: "Alan Randy",
    job: "IT support",
    description:
      " Responsible for helping drive the high-level architectural discussions regarding the work in our company",
  },
];

let speakers = document.getElementById("speakers");

if (speakers) {
  data.forEach((obj) => {
    let li = document.createElement("li");
    li.setAttribute("class", "speaker");
    li.innerHTML = `
    <div class='speaker-img'>
      <img src=${obj.img} alt='speaker-img' /></div>
    <div class='speaker-details'>
      <p class='speaker-name'>${obj.name}</p>
      <p class='speaker-job'>${obj.job}</p>
      <p class='speaker-achievement'>${obj.description}</p>
    </div>
  `;
    speakers.appendChild(li);
  });
}

let showlinks = "showlinks";

let links = document.querySelectorAll(".link-item");
let linkscont = document.getElementById("links");
let hamburger = document.getElementById("hamburger");
let closeicon = document.getElementById("close");

if (!closeicon.classList.contains("close")) {
  closeicon.classList.add("close");
}

if (linkscont.classList.contains(showlinks)) {
  linkscont.classList.remove(showlinks);
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    linkscont.classList.remove(showlinks);
    closeicon.classList.add("close");
  });
});

hamburger.addEventListener("click", () => {
  linkscont.classList.toggle(showlinks);
  closeicon.classList.toggle("close");
});

closeicon.addEventListener("click", () => {
  linkscont.classList.remove(showlinks);
  closeicon.classList.add("close");
});
