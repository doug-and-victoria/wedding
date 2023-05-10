window.addEventListener("load", set_header);

function set_header() 
{
    var title = document.createElement("p");
    title.className = "title"
    title.innerText = "Victoria Albanese & Douglas Salvati"

    var subtitle = document.createElement("p");
    subtitle.className = "subtitle"
    subtitle.innerText = "September 10, 2023"

    var titles_div = document.createElement("div");
    titles_div.className = "titles_div"
    titles_div.appendChild(title)    
    titles_div.appendChild(subtitle)    

    var logo = document.createElement("img");
    logo.className = "wedding_logo"
    logo.src = "/wedding/images/logo_white.png"
    
    var logo_div = document.createElement("div");
    logo_div.className = "wedding_logo_div"
    logo_div.appendChild(logo)

    var above_nav_stripe_div = document.createElement("div");
    above_nav_stripe_div.className = "above_nav_stripe_div"
    above_nav_stripe_div.appendChild(titles_div)
    above_nav_stripe_div.appendChild(logo_div)

    var nav_stripe = document.createElement("nav");
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/\"><span>Home</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/photos/\"><span>Photos</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/q_and_a/\"><span>Q & A</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/registry/\"><span>Registry</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/directions/\"><span>Directions</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/accommodations/\"><span>Accommodations</span></a></div>\n"

    var header = document.getElementsByTagName("header")[0]
    header.appendChild(above_nav_stripe_div)
    header.appendChild(nav_stripe)
}
