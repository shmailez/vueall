// self.addEventListener("notificationclick", function (event) {
//     console.log("notificación abierta");
//   });
  
//   self.addEventListener("notificationclick", function (event: any) {
//     const channel = new BroadcastChannel("sw-mensajes");
//     if (event.action == "aceptar") {
//       channel.postMessage({ title: "aceptar" });
//     }
  
//     if (event.action == "rechazar") {
//       channel.postMessage({ title: "rechazar" });
//     }
//   });

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js'); 

declare const workbox: any

// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
    ({ request }: { request: Request }) => request.destination === 'image',
    // eslint-disable-next-line no-undef
    new workbox.strategies.NetworkFirst()
);