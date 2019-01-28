
// draw line in 2d
function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle = "#d3d3d3";
    ctx.stroke();
};

var Piechart = function (options) {
    this.options = options;
    var beginX = options.beginX;
    var beginY = options.beginY;
    var widthCol = options.widthCol;
    var color = options.colors;
    var ctx = options.ctx;
    var myRate = options.data;
    var height = [myRate.A, myRate.B, myRate.C, myRate.E, myRate.F];
    var name = ["A", "B", "C", "E", "F"];
    var font = options.font;
    var title = options.title;

    //Draw the bottom line
    // this.drawMainLine = function () {
    //     ctx.fillStyle = "#000";
    //     drawLine(ctx, 300, 600, 800, 600);
    // }

    //Draw 4 line
    this.drawLine = function () {
        for (var i = 0; i < 5; i++) {
            drawLine(ctx, 300, 600 - i * 100, 800, 600 - i * 100);
            ctx.fillText(i, 250, 600 - i *100, 40, 40);
        }
    }

    //Draw chart
    this.drawChart = function() {
        for (var i = 0; i < 5; i++) {
            ctx.fillStyle = color;
            ctx.fillRect(beginX + i * 100, beginY, widthCol, -height[i]*100);
        }
    };

    //Name of column
    this.drawName = function () {
        for (var i = 0; i < 5; i++) {
            ctx.fillStyle = "black";
            ctx.fillText(name[i], 320 + i * 100, 630);
        }
    };

    //Draw title of chart
    this.drawTitle = function() {
        ctx.beginPath();
        ctx.font = font.large;
        ctx.fillStyle = "black";
        ctx.fillText(title, 500, 680);
        ctx.stroke();
    };

    //Draw name of chart
    this.drawNameChart = function () {
        ctx.fillText("BIỂU  ĐỒ LỊCH SỬ LEVEL OF POSITION", 330, 130);
    };

    //Draw right of chart
    this.drawRight = function () {
        ctx.fillStyle = "blue";
        ctx.fillRect(850, 200, 100, 50);
        ctx.fillStyle = "#000";
        ctx.fillText("LEVEL", 850, 280);
        ctx.fillText("OF", 850, 310);
        ctx.fillText("POSITION", 850, 340);

    };
    
    //Draw left of chart
    this.drawLeft = function () {
        ctx.rotate(-90 * Math.PI / 180);
        ctx.transform(1, 0, -0.4, 1, 0, 0);
        ctx.fillText("LEVEL OF POSITION", -400, 200);
    };

};


