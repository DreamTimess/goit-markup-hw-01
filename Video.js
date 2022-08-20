
var youtube = [
    "https://www.youtube.com/watch?v=6_im_hGxGRk",
    "https://www.youtube.com/watch?v=zxYjTTXc-J8",
    "https://www.youtube.com/watch?v=zxYjTTXc-J8",
    "https://www.youtube.com/watch?v=xMATmyBV47s",
    "https://www.youtube.com/watch?v=L6mw6-HlgbM",
]

var tiktok = [
"https://www.tiktok.com/@neymar.jlr/video/7132141057306823941?is_copy_url=1&is_from_webapp=v1",
"https://www.tiktok.com/@andcarli/video/7114067528841841925?is_copy_url=1&is_from_webapp=v1",
"https://www.tiktok.com/@hero.video1/video/7107224951970729222?is_copy_url=1&is_from_webapp=v1",
"https://www.tiktok.com/@dianka.galka/video/7129839203206171910?is_copy_url=1&is_from_webapp=v1",
"https://www.tiktok.com/@kylethomas/video/7119444215544728837?is_copy_url=1&is_from_webapp=v1"
]

var coub = [
"https://coub.com/view/31a245"
]

//function getRandomInt()
//{
//   return Math.floor(Math.random(coub,tiktok,youtube));
//}
//var video = youtube[getRandomInt(coub,tiktok,youtube)]
//function final()
//    if (video === getRandomInt) {
//        return (function getRandomInt)
//}
//
//

const video = document.querySelector("video");
const button = document.querySelector("button");

window.onload = () => generateRandomVideo(youtube);

button.addEventListener("click", () => generateRandomVideo(youtube));

function generateRandomVideo(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	video.setAttribute("video", array[randomNum]);
}
