console.log("loaded editor.js");

var header = "";

var date=new Date();
header+="> Date Created: "+date.toLocaleString();

const easymde = new EasyMDE({
    autofocus: true,
    uploadImage: true,
    hideIcons: ["guide","fullscreen"],
    initialValue: header, 
    spellChecker: false});


// on document ready, toggle full screen
$(document).ready(function() {
    easymde.toggleFullScreen();
});



// on ctrl+s, save
$(document).keydown(function(e) {
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        console.log(easymde.value());
        const content = easymde.value();
        const element = document.createElement("a");
        const file = new Blob([content], {type: "text/plain"});
        element.href = URL.createObjectURL(file);
        element.download = "file.md";
        element.click();
        
    }
});