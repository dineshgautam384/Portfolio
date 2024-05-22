// let btnDownload = document.querySelector("#pdf");
// btnDownload.addEventListener("click", startDownload);
// async function startDownload() {
//   let url = "files\Front End Web Developer Resume.pdf";
//   let fileName = "dinesh_CV";
// //   const res = await fetch(url);
//   const blob = await res.blob();
//   saveAs(blob, dinesh_CV);
// }

// Scroll Back To Top 
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 150){
            scrollTopButton.classList.add('scrollActive');
        } else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();
