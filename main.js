'use strict';

const electron = require('electron');           // Electron
const app = electron.app;                       // Controls Application Life
const BrowserWindow = electron.BrowserWindow;   // Create native browser window
const open = require("open");                   // Opens windows in a REAL browser

var mainWindow = null;

app.on('window-all-closed', function() {
    // OS X Workaround
    // Otherwise menu bar stays active
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function(){
    // Initialize the brwoser window
    mainWindow = new BrowserWindow({minHeight: 650, minWidth: 800});

    // Load initial page
    mainWindow.loadURL('file://' + __dirname + '/public/index.html');

    // Hide the default menu bar
    mainWindow.setMenu(null);

    // Open the DevTools
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        // Dereference the window object
        mainWindow = null;
    });
});