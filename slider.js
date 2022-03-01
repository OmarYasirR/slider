let container = document.querySelector(".container");
let imgCounter = document.querySelector(".container .img-cout");
let imgContainer = document.querySelector(".container .img-cont");
let next = document.querySelector(".slider-controler .next");
let prev = document.querySelector(".slider-controler .prev");
let imagesArr = [...imgContainer.children];
let imgNum = imagesArr.length;
// Create pagination
let pagUl = document.createElement("ul");
pagUl.style.cssText =
    `display: flex;
    justify-content: space-between;
    width: 100px ; 
    margin: auto; 
    margin-top: -50px;`;
for (let i = 0; i < imgNum; i++) {
    let pagLi = document.createElement("li");
    pagLi.style.cssText = `
        list-style: none;
        border-radius: 50%;
        margin-left: 5px;
        width: 12px;
        height: 12px;
        border: 1px solid;
        border-rudios: 50%;
        cursor: pointer;
    `;
    pagUl.appendChild(pagLi);
}
container.appendChild(pagUl);

currentIndex = 0;
let activeImage;
prev.classList.add("diseable");
imgCounter.innerHTML = `${currentIndex + 1}   /  ${imgNum}`;
let pagArr = [...pagUl.children];
//Add class active to pagination
pagArr[currentIndex].setAttribute("class", "active");
//scroll by bullids
pagArr.forEach((el, i) => {
    el.addEventListener("click", function () {
        if (i == imgNum - 1) {
            next.classList.add("diseable");
        } else {
            next.classList.remove("diseable");
        }
        if (i == 0) {
            prev.classList.add("diseable");
        } else {
            prev.classList.remove("diseable");
        }
        pagArr[currentIndex].classList.remove("active");
        currentIndex = i;
        imgCounter.innerHTML = `${currentIndex + 1}   /  ${imgNum}`;
        pagArr[currentIndex].setAttribute("class", "active");
        imgContainer.scrollTo({
            left: 400 * i,
            top: 0,
            behavior: "smooth",
        });
    });
});

next.onclick = function () {
    scrollToRight();
};

prev.onclick = function () {
    scrollToLeft();
};

function scrollToRight() {
    pagArr[currentIndex].classList.remove("active");
    currentIndex++;
    activeImage = imagesArr[currentIndex];
    prev.classList.remove("diseable");
    next.classList.remove("diseable");

    imagesArr.forEach((img) => {
        if (img == activeImage) {
            imgContainer.scrollBy({
                left: 400,
                top: 0,
                behavior: "smooth",
            });
        }
    });
    if (currentIndex == imgNum - 1) {
        next.classList.add("diseable");
    }
    imgCounter.innerHTML = `${currentIndex + 1}   /  ${imgNum}`;
    pagArr[currentIndex].setAttribute("class", "active");
}

function scrollToLeft() {
    pagArr[currentIndex].classList.remove("active");
    currentIndex--;
    activeImage = imagesArr[currentIndex];
    prev.classList.remove("diseable");
    next.classList.remove("diseable");
    imagesArr.forEach((img, i) => {
        if (img === activeImage) {
            imgContainer.scrollBy({
                left: -400,
                top: 0,
                behavior: "smooth",
            });
        }
    });
    if (currentIndex == 0) {
        prev.classList.add("diseable");
    }
    imgCounter.innerHTML = `${currentIndex + 1}   /  ${imgNum}`;
    pagArr[currentIndex].setAttribute("class", "active");
}
