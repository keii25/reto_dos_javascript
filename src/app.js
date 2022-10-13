let personajesHOD = [ 
    'Rhaenerya', 
    'Daemon', 
    'Viserys', 
    'Alicent'
];
/** 
for (let i = 0; i < personajesHOD.length; i++) {
    console.log(`${i + 1} ${personajesHOD[i]}`);
}
*/

personajesHOD.forEach((personaje, index) => console.log(`${index + 1} ${personaje}`));
