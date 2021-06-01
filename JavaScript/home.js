var i=0,text;
text="Get The Best, Than The Rest ..."

function typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,180);
    }
}
typing();