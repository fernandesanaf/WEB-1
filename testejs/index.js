let ctx = document.getElementById('chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Roboto'

const mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            // this dataset is drawn below
            order: 2
        }, {
            label: 'Line Dataset',
            data: [10, 10, 10, 10],
            type: 'line',
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
 })