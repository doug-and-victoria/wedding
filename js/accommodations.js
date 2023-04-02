window.addEventListener("load", modify_hotel_info);

function modify_hotel_info() 
{
    if (window.innerHeight > window.innerWidth)
    {
        for (let i = 0; i < document.getElementsByTagName("p").length; i++)
        {
            var og_str = document.getElementsByTagName("p")[i].innerHTML
            document.getElementsByTagName("p")[i].innerHTML = og_str.replace("||", "<br/>")
        } 
    }
}
