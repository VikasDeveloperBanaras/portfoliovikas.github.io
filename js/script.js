/*============================ typing animation ========================*/
const typed=new Typed(".typing",{
    strings:["Web Designer","Web Developer","Wordpress Developer","Laravel Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


function showcv()
{
    window.location.href='https://drive.google.com/u/0/uc?id=1GnA6MtP9ptIMPZVd1tgvzqw_qTp1QDW9&export=download';
}

function colorbadlo(xx)
{
    // console.log(xx);
    var r = document.querySelector(':root');
    r.style.setProperty('--skin-color', ''+xx);

}