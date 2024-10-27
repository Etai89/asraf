$(document).ready(()=>{
const client = "אסרף"
$('.client').text(client)

const contractor = "איתי חתואל"
$('.contractor').text(contractor)


function zoomOut() {
    document.body.style.transform = "scale(0.95)"; // Adjust scale as desired (0.8 = 80% zoom)
    document.body.style.transformOrigin = "top center"; // Sets the origin of scaling
}
// zoomOut()
const square = (x, y) => {
    return x * y
}


const runningMeter = (length_A, length_B, width_A, width_B, height) => {
    const length = length_A + length_B
    const width = width_A + width_B
    return (length + width) * height
}

const result = Math.round(runningMeter(4.00, 4.00, 2.85, 2.85, 2.60))

})
