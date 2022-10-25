
const myHeading = document.querySelector("h1");
myHeading.textContent = "Artworks:";


const myImage = document.querySelector("img");
const imageSrcs = ["images/bastion_art.jpg", "images/Church_smaller.png",
                    "images/cunieform_writer.jpg", "images/planks2.jpg"
                    ];

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    const i = imageSrcs.indexOf(mySrc);
    if (i < imageSrcs.length-1){
        myImage.setAttribute("src", imageSrcs[i+1]);
    } else {
        myImage.setAttribute("src", imageSrcs[0])
    }
};
