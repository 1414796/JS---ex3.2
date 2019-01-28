window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}
function Canvas() {
    var myRate = {
        A: 2,
        B: 0.1,
        C: 3,
        E: 4,
        F: 4
    };
    var color = "blue";
    var font = {
        large: "20px Arial",
        normal: "14px Arial",
        small: "10px Arial"
    };
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    var myPiechart = new Piechart(
        {
            ctx,
            beginX: 300,
            beginY: 600,
            widthCol: 50,
            title: "TÊN DỰ ÁN",
            canvas: canvas,
            data: myRate,
            font: font,
            colors: color
        }
    );

    // myPiechart.drawMainLine();
    myPiechart.drawLine();
    myPiechart.drawChart();
    myPiechart.drawName();
    myPiechart.drawTitle();
    myPiechart.drawNameChart();
    myPiechart.drawRight();
    myPiechart.drawLeft();

}