Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'UCSD admissions 2018'
    },
    subtitle: {
        text: 'https://www.highcharts.com/demo/pie-basic'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Admissions',
        colorByPoint: true,
        data: [{
            name: 'fulltime_men_applied',
            y: 34.0,
            sliced: true,
            selected: true
        }, {
            name: 'fulltime_women_applied',
            y: 38.9
        }, {
            name: 'fulltime_men_admitted',
            y: 10.3
        }, {
            name: 'fulltime_women_admitted',
            y: 11.8
        }, {
            name: 'fulltime_men_enrolled',
            y: 2.4
        }, {
            name: 'fulltime_women_enrolled',
            y: 2.6
        }]
    }]
});