var doughnutChart = document.getElementById('doughnutChart');

var barChart = document.getElementById('barChart');

var doughnut = new Chart(doughnutChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [

            'MS SQL',
            'JavaScript',
            'NodeJS',
            'jQuery',
            'CSS',
            'HTML'
        ],
        datasets: [{
            label: 'Core Skill Set',
            backgroundColor: [
                '#17deee',
                '#FFD700',
                '#ff4162',
                '#10aeb2',
                '#ecf284',
                '#daa520'
        ],
            borderColor: '#4C4C4C',
            data: [
                50,
                20,
                15,
                15,
                10,
                10
            ],
        }]
    },

    // Configuration options go here
    options: {
        //responsive: false,
        cutoutPercentage: 40,
        rotation: .6679 * Math.PI
    }
});

var bar = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [
            'C#',
            'AngularJS',
            'ReactJS',
            'HandlebarsJS',
            'Jade/PugJS',
            'ExpressJS',
            'Firebase',
            'MVC',
            'Git',
            'MySQL',
            'MongdDB',
            'Wordpress'
        ],
        datasets: [{
            label: 'More Skills',
            backgroundColor: [
                '#d3ffce',
                '#00ffff',
                '#ff7373',
                '#40e0d0',
                '#e6e6fa',
                '#0000ff',
                '#ffa500',
                '#b0e0e6',
                '#7fffd4',
                '#faebd7',
                '#003366',
                '#fa8072'
        ],
            borderColor: '#4C4C4C',
            data: [
                3,
                3,
                2,
                2,
                1,
                5,
                3,
                5,
                5,
                7,
                3,
                6,
                0,
                10
            ],
        }]
    },

    // Configuration options go here
    options: {
        //responsive: true,
        // cutoutPercentage: 40,
        // rotation: .6679 * Math.PI
    }
});
