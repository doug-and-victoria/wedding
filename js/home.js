window.addEventListener("load", set_days_until_wedding);

function set_days_until_wedding() 
{
    let wedding_day = new Date('09/10/2023');
    let today = new Date();

    let difference = wedding_day.getTime() - today.getTime();
    let days_until_wedding = Math.ceil(difference / (1000 * 3600 * 24));
    document.getElementById("days").innerHTML = days_until_wedding;
} 
