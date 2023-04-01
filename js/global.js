window.addEventListener("load", set_header);

function set_header() 
{
    var header_div = document.createElement("div");
    header_div.className = "title"
    header_div.innerText = "Victoria & Douglas"

    var logo = document.createElement("img");
    logo.className = "wedding_logo"
    logo.src = "/wedding/images/logo_white.png"

    var nav_stripe = document.createElement("nav");
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/\"><span>Home</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/photos/\"><span>Photos</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/q_and_a/\"><span>Q & A</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/directions/\"><span>Directions</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/accommodations/\"><span>Accommodations</span></a></div>\n"
    nav_stripe.innerHTML+= "\t\t<div class=\"nav_item\"><a href=\"/wedding/pages/registry/\"><span>Registry</span></a></div>\n"

    var header = document.getElementsByTagName("header")[0]
    header.appendChild(header_div)
    header.appendChild(logo)
    header.appendChild(nav_stripe)
}
