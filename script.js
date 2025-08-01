

    
const imagePaths = [
  "ss11.PNG" ,"ss12.PNG" ,"ss13.PNG" ,"ss14.PNG" ,"ss21.PNG","ss22.PNG" ,"ss23.PNG" ,"ss24.PNG" 
,"ss31.PNG" ,"ss32.PNG" ,"ss33.PNG" ,"ss22.PNG" ,"ss41.PNG","ss42.PNG" ,"ss43.PNG" ,"ss44.PNG"
,"ss51.PNG" ,"ss52.PNG", "ss53.PNG" ,"ss54.PNG"

];

const slideRow = document.getElementById("slideRow");
const dotsContainer = document.getElementById("dots");
const groupSize = 4;
let currentGroup = 0;
const totalGroups = Math.ceil(imagePaths.length / groupSize);


for (let i = 0; i < totalGroups; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

function showGroup(index) {
  
  slideRow.innerHTML = "";
  const start = index * groupSize;
  const end = start + groupSize;
  const groupImages = imagePaths.slice(start, end);
  groupImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    slideRow.appendChild(img);
  });

  
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentGroup = (currentGroup + 1) % totalGroups;
  showGroup(currentGroup);
}, 3000);

showGroup(currentGroup); 








