import React from 'react'
import html2canvas from 'html2canvas'

const RenderViewer = ({ renderResult }) => {
    React.useEffect(() => {
        console.log(html2canvas)
        html2canvas(document.querySelector("#canvasView"), { backgroundColor: null, width: 1920, height: 1080, scrollY: 0 }).then(canvas => {
            document.querySelector("#imageMode").appendChild(canvas)
            document.querySelector("#canvasView").style.display = "none";
        });
    }, [renderResult]);

    return (<div>
        <div id="imageMode" />
        <div id="canvasView" style={{ width: "1920px", height: "1080px" }}>{renderResult}</div>
    </div>)
}

export default RenderViewer;