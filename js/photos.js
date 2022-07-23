window.onclick = e => 
{
    var src = e.target.src
    var href = e.target.parentElement.href.split('#')[1];
        
    var lightbox = document.getElementsByClassName('lightbox')[0];
    lightbox.id = href;
    lightbox.childNodes[1].style = 'background-image: url(\'' + src + '\')'
} 
