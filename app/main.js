const { app, BrowserWindow } = require("electron");

const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        frame : false,
        width: 500,
        height: 500,
        minWidth: 400,
        minHeight: 250,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});
