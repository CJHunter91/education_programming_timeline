var _ = require('lodash');
var LineChart = function(langauge){
    var container = document.getElementById('popChart')
    var dataFill = function(language){
        var popArray = []

        for (var year of langauge[0].popularity){
            var popDetails = _.values(year)
             popArray.push(popDetails); 
        }
        return popArray
    }

    var chart = new Highcharts.Chart({
        chart: {
            backgroundColor: '#4E5D69',
            color: "#000",
            polar: true,
            type: "line",
            renderTo: container
        },
        plotOptions: {
            series: {
                pointStart: parseInt(_.keys(langauge[0].popularity[0]))
            }
        },
        title: {
            text: "Popularity over time",
            style: {
                color: '#FFF'
            }
            
        },
        series: [{
            name: langauge[0].language,
            data: dataFill()
            }
        ]
        ,
        xAxis: {
            tickColor: '#FFF',
            title: {
                text: 'Years',
                style: {
                    color: '#FFF',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                 }
            },
            labels: {
                style: {
                   color: '#FFF',
                   font: '11px Trebuchet MS, Verdana, sans-serif'
                }
             },
        },
        yAxis: {
            color: '#FFF',
            title: {
                text: '%',
                style: {
                    color: '#FFF',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                 }
            },
            labels: {
                style: {
                    color: '#FFF',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            }
            
        }
    });
}

module.exports = LineChart;