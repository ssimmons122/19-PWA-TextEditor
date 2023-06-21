const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //store events
    window.deferredPrompt = event;
    //remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
    return;
  }
    promptEvent.prompt();
    //reset prompt var, only use once
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear prompt
    window.deferredPrompt = null;
});
