var doughnutChart = document.getElementById('doughnutChart');

var chart = new Chart(doughnutChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [
            "HTML", 
            "CSS", 
            "JavaScript", 
            "SQL", 
            'C#'
        ],
        datasets: [{
            label: "My Skill Set",
            backgroundColor: [
                '#17deee', 
                '#ff7f50', 
                '#ff4162', 
                '#10aeb2', 
                '#ecf284'
        ],
            borderColor: 'rgb(255, 99, 132)',
            data: [
                20, 
                15, 
                25, 
                35, 
                5
            ],
        }]
    },

    // Configuration options go here
    options: {}
});