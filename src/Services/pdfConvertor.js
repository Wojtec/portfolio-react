import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';

function genPDF(){
    window.html2canvas = html2canvas;

    let doc = new jsPDF("p", "mm", "a4");
    html2canvas(document.querySelector('.App'), { scale: 2})
    .then(canvas => {
        let x = canvas.toDataURL("image/jpeg", 0.95);
        doc.addImage(x, "PNG", 25, 25, 160, 200);
        doc.save('PoninskiCV.pdf');

    })

}

export default genPDF;