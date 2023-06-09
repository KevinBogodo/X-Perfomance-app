// main.js

// Modules de controle du cycle de vie de l'application et de création 
// de fenêtre native de navigateur
const { app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
  // Création de la fenêtre de navigateur.
  const mainWindow = new BrowserWindow({
    minWidth: 1280,
    minHeight: 800,
    icon: 'Icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    
  })

  // To maximise
  mainWindow.maximize()

  require('update-electron-app')()

  // et chargement de l'index.html de l'application.
  mainWindow.loadFile('index.html')



  // Ouvrir les outils de développement.
  // mainWindow.webContents.openDevTools()
}

// show notification
const NOTIFICATION_TITLE = 'x Performance'
const NOTIFICATION_BODY = 'Start X Performance'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}


// Cette méthode sera appelée quand Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.whenReady().then(() => {
  createWindow()
  then(showNotification)

  app.on('activate', () => {
    // Sur macOS il est commun de re-créer une fenêtre  lors 
    // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. Dans ce cas il est courant
// que les applications et barre de menu restents actives jusqu'à ce que l'utilisateur quitte 
// de manière explicite par Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Dans ce fichier vous pouvez inclure le reste du code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.