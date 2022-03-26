# Markdown Notes Popup

![demo](https://user-images.githubusercontent.com/7833164/160223065-33db6274-5296-47e9-9658-c85c50b101bf.gif)


I'm using this as a pop up window in xfce to quickly write notes in markdown.

The app folder contains the electron app, keyboard shortcuts are available. Each note automatically prepends the date of creation and author to a banner at the start of the file.

Linux Only -- not cross platform currently, although it probably isn't far from working with other systems.


The devilspie2 folder contains a script to hide the frame of the window.


## How to run

1. `cd app && npm install`
2. `npm run start`

## Deploy and Run
1. `cd app && npm install`
2. `npm run dist`
3. `./dist/Notes-1.0.0.AppImage`
