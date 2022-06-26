//awards
var photo = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>"

//loop
for (var i=0; i<10; i++) {
    fileNames.push ("photo"+(i+1));
    photo.push ("<img src='images/awards/"+fileNames[i]+".png'>")
    image = openList + photo[i] + closeList;
    imageList.push(image)
}

//Display the images
document.getElementById("awards").innerHTML = imageList.join("");

//---------------------------------------------------------------------------------------------------------
