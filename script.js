google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Pie Chart Data and Options
    var pieData = google.visualization.arrayToDataTable([
        ['Impact', 'per 100 percent'],
        ['Positive',      46],
        ['Negative',      14],
        ['Neutral',       20],
        ['N/A',           20]
    ]);
    var pieOptions = {
        title: 'COUNT OF IMPACT'
    };
    var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
    pieChart.draw(pieData, pieOptions);

    // Bar Chart Data and Options
    var barData = google.visualization.arrayToDataTable([
        ['Frequency', 'Count'],
        ['Daily', 20],
        ['Weekly', 11],
        ['Never', 9],
        ['Rarely', 8]
    ]);
    var barOptions = {
        title: 'FREQUENCY DISTRIBUTION',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
            title: 'Frequency',
            minValue: 0,
        },
        vAxis: {
            title: 'Count'
        }
    };
    var barChart = new google.visualization.BarChart(document.getElementById('chart_div'));
    barChart.draw(barData, barOptions);
}
/* ================================= typing animation ====================================*/
var typed = new Typed(".typing",{
    strings: ["", "G.Hemalatha", "K.BhavyaSri", "A.Srilatha"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})
/* ================================= Aside ====================================*/
const nav = document.querySelector(".nav"),
      navList =nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
        {
            console.log
        }   