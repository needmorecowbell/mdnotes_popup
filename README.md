# Markdown Notes Popup

![notes](https://user-images.githubusercontent.com/7833164/160218060-9e1980e7-e7da-46d0-9c1e-7711111dea7a.gif)

I'm using this as a pop up window in xfce to quickly write notes in markdown.

The app folder contains the electron app, ctl+s to save. Each note automatically prepends the date of creation to the a banner on top.

Linux Only -- not cross platform currently, although it probably isn't far from working with other systems.


The devilspie2 folder contains a script to hide the frame of the window.


## How to run

1. `cd app && npm install`
2. `npm run`

## Deploy and Run
1. `npm run dist`
2. `./dist/Notes-1.0.0.AppImage`

