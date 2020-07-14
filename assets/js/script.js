// console.log("Emotion : ");


//     // enregistre le script sw avec les navigateurs qui le gèrent
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('sw.js', { scope: '../' }).then(() => {
//         console.log('Service Worker enregistré correctement.');
//         console.log(':)')
//       }).catch(error => {
//         console.log('Erreur lors de l\'enregistrement du Service Worker : ', error);
//         console.log(':/')
//       });
//     }
//     else { // exemple erreur possible => site pas en https 
//       console.log(":'(");
//     }