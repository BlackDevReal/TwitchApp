const { app, BrowserWindow, session, globalShortcut } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', async () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
        },
    });

    // Register a global shortcut for Option+D (Alt+D on non-macOS)
    globalShortcut.register('Alt+D', () => {
        if (mainWindow) {
            mainWindow.webContents.toggleDevTools(); // Toggle DevTools on/off
        }
    });

    // Load the 7TV extension
    const TV = path.join(__dirname, 'extensions/7tv');
    const TTVBlock = path.join(__dirname, 'extensions/TTVBlock');
    const TTVAutoClaim = path.join(__dirname, 'extensions/TTVAutoClaim');
    const TTVRedesign = path.join(__dirname, 'extensions/TTVRedesign');

    try {
        await session.defaultSession.loadExtension(TV);
        console.log('7TV extension loaded successfully!');
    } catch (err) {
        console.error('Failed to load the 7TV extension:', err);
    }
    try {
        await session.defaultSession.loadExtension(TTVBlock);
        console.log('TTVBlock extension loaded successfully!');
    } catch (err) {
        console.error('Failed to load the TTVBlock extension:', err);
    }
    try {
        await session.defaultSession.loadExtension(TTVAutoClaim);
        console.log('TTVAutoClaim extension loaded successfully!');
    } catch (err) {
        console.error('Failed to load the TTVAutoClaim extension:', err);
    }
    try {
        await session.defaultSession.loadExtension(TTVRedesign);
        console.log('TTVRedesign extension loaded successfully!');
    } catch (err) {
        console.error('Failed to load the TTVRedesign extension:', err);
    }

    mainWindow.loadURL('https://twitch.tv');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        mainWindow = new BrowserWindow({
            width: 1024,
            height: 768,
            webPreferences: {
                nodeIntegration: false,
            },
        });
        mainWindow.loadURL('https://twitch.tv');
    }
});

app.on('will-quit', () => {
    // Unregister all shortcuts when the app quits
    globalShortcut.unregisterAll();
});
