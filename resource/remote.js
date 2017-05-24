(function () {
    const electron = require('electron');
    const ipcRenderer = electron.ipcRenderer;
    const remote = electron.remote;
    const remoteApi = remote.require('./config/apis/index.js');
    
    global.remoteApi = remoteApi;
    global.ipcRenderer = ipcRenderer;
})();