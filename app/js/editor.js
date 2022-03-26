var banner = "";
var date = new Date();

var noteHeader = document.getElementById("note-header");
var dateCreated = date.toLocaleString();
var author = document.getElementById("author").textContent

banner += "> Date Created: " + dateCreated + "\n";
banner += "> Author: " + author + "\n";

const easymde = new EasyMDE({
    autofocus: true,
    uploadImage: true,
    toolbar: [
        {
            name: "bold",
            action: EasyMDE.toggleBold,
            className: "fa fa-bold",
            title: "Bold"
        },
        {
            name: "italic",
            action: EasyMDE.toggleItalic,
            className: "fa fa-italic",
            title: "Italic"
        },
        {
            name: "strikethrough",
            action: EasyMDE.toggleStrikethrough,
            className: "fa fa-strikethrough",
            title: "Strikethrough"
        },
        {
            name: "dropdown",
            className: "fa fa-header",
            title: "Headings",
            children: [
                {
                    name: "heading-1",
                    action: EasyMDE.toggleHeading1,
                    className: "fa fa-header",
                    title: "Heading 1"
                },
                {
                    name: "heading-2",
                    action: EasyMDE.toggleHeading2,
                    className: "fa fa-header",
                    title: "Heading 2"
                },
                {
                    name: "heading-3",
                    action: EasyMDE.toggleHeading3,
                    className: "fa fa-header",
                    title: "Heading 3"
                },
                {
                    name: "heading-bigger",
                    action: EasyMDE.toggleHeadingBigger,
                    className: "fa fa-header",
                    title: "Heading Bigger"
                },
                {
                    name: "heading-smaller",
                    action: EasyMDE.toggleHeadingSmaller,
                    className: "fa fa-header",
                    title: "Heading Smaller"
                }
            ]
        }, '|',
        {
            name: "table",
            action: EasyMDE.drawTable,
            className: "fa fa-table",
            title: "Toggle Table"
        },
        {
            name: "link",
            action: EasyMDE.drawLink,
            className: "fa fa-link",
            title: "Create Link"
        },
        {
            name: "image",
            action: EasyMDE.drawImage,
            className: "fa fa-picture-o",
            title: "Insert Image"
        }, "|",
        {
            name: "side-by-side",
            action: EasyMDE.toggleSideBySide,
            className: "fa fa-columns",
            title: "Toggle Side by Side"
        },
        {
            name: "preview",
            action: EasyMDE.togglePreview,
            className: "fa fa-eye no-disable",
            title: "Toggle Preview"
        },
        {
            name: "alert",
            action: saveFile,
            className: "fa fa-lg fa-save",
            title: "Save",
        }],
    element: document.getElementById('editor'),
    initialValue: banner,
    spellChecker: false
});


// on document ready, toggle full screen
$(document).ready(function () {
    easymde.toggleFullScreen();
});

function saveFile() {
    const content = easymde.value();
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    var fname= dateCreated.replaceAll("/","_")
                          .replaceAll(",","")
                          .replaceAll(":","_")
                          .replaceAll(" ","_");
    fname+=".md";
    element.download = fname;
    element.click();
}


// on ctrl+s, save
$(document).keydown(function (e) {
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        saveFile();

    }
});