
var like;
var dislike;

function loadDefaults(){
    like=localStorage.getItem("like");
    dislike=localStorage.getItem("dislike");
    if (like==null && dislike==null) {

        localStorage.setItem("like",0);
        localStorage.setItem("dislike",0);
    }
    else
    {

        document.getElementById("like").innerHTML ="Like " + localStorage.getItem("like") ;
        document.getElementById("dislike").innerHTML ="Dislike " + localStorage.getItem("dislike");

    }
}


function likeImage() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("like",++like);
        document.getElementById("like").innerHTML = "Like " + localStorage.getItem("like");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


function dislikeImage(){
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("dislike",++dislike);
        document.getElementById("dislike").innerHTML = "Dislike " + localStorage.getItem("dislike");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


