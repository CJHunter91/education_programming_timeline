var LineChart = function(langauge){
    var container = document.getElementById('popChart')
    console.log(langauge[0].popularity)
    var seriesFill = function(language){
        var popArray = []
        
        for (var year of langauge){
            var countryDetails = {name: language[0].year, data: [country.population, country.area]}
             countriesArray.push(countryDetails); 
        }
        return popArray
    }


    var chart = new Highcharts.Chart({
        chart: {
            type: "line",
            renderTo: container
        },
        plotOptions: {
            series: {
                pointStart: 2010
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