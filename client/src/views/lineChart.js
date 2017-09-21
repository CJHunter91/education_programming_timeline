var _ = require('lodash');
var LineChart = function(language){
    var container = document.getElementById('popChart')

    var dataFill = function(){
        var popArray = []
        for (var lang of language){
            var yearArray = [];
            for (var year of lang.popularity){
                var popDetails = _.values(year)
                yearArray.push(popDetails); 
            }
            var langObj = {name: lang.language, data: yearArray};
            popArray.push(langObj);
    }
    return popArray;
    
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
                pointStart: parseInt(_.keys(language[0].popularity[0]))
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: "Popularity over time",
            style: {
                color: '#FFF'
            }
            
        },
        series:
        dataFill()
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