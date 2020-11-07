// Get saved data from sessionStorage
let title = sessionStorage.getItem("title"); // Your code here
let lat_max = sessionStorage.getItem("latMax");
let lat_min = sessionStorage.getItem("latMin");
let lon_max = sessionStorage.getItem("lonMax");
let lon_min = sessionStorage.getItem("lonMin");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

document.getElementById("title").innerHTML =  title;
document.getElementById("lat_max").innerHTML = latMax;
document.getElementById("lat_min").innerHTML = latMin;
document.getElementById("lon_max").innerHTML = lonMax;
document.getElementById("lon_min").innerHTML = lonMin;