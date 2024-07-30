let images = documents.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = documents.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener('click', () =>{
        openModel('images/img${index}.jpg')
    });
});

function openModel(pic) {
    wrapper.style.display = "flex"
    imgWrapper.src = pic
}
