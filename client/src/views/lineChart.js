var LineChart = function(langauge){
    var container = document.getElementById('popChart')
    var dataFill = function(language){
        var popArray = []
        console.log(langauge[0].popularity)
        for (var year of langauge[0].popularity){
            var popDetails = {data: Object.values(year)}
             popArray.push(popDetails); 
        }
        console.log("----------------")
        console.log(popArray);
        return popArray
    }

    dataFill();


    var chart = new Highcharts.Chart({
        chart: {
            type: "line",
            renderTo: container
        },
        plotOptions: {
            series: {
                pointStart: langauge[0].popularity
            }
        },
        title: {
            text: "Programming Languages over years"
        },
        series: [{
            name: langauge[0].language,
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }
        ]
        ,
        xAxis: {
            title: {
                text: 'Years'
            }
        },
        yAxis: {
            title: {
                text: '%'
            }
        }
    });
}

module.exports = LineChart;