'use strict';

import "./html2canvas.js";



html2canvas(document.querySelector("#canvas")).then(canvas => {
    //document.body.appendChild(canvas)
    let link = document.createElement('a');
    link.download = `bird_${Date.now()}.png`;
    link.href = canvas.toDataURL()
    //link.click();
});


