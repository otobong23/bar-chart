
const data = [
    {
      "day": "mon",
      "amount": 17.45,
      "color": "hsl(10, 79%, 65%)"
    },
    {
      "day": "tue",
      "amount": 34.91,
      "color": "hsl(10, 79%, 65%)"
    },
    {
      "day": "wed",
      "amount": 52.36,
      "color": "hsl(186, 34%, 60%)"
    },
    {
      "day": "thu",
      "amount": 31.07,
      "color": "hsl(10, 79%, 65%)"
    },
    {
      "day": "fri",
      "amount": 23.39,
      "color": "hsl(10, 79%, 65%)"
    },
    {
      "day": "sat",
      "amount": 43.28,
      "color": "hsl(10, 79%, 65%)"
    },
    {
      "day": "sun",
      "amount": 25.48,
      "color": "hsl(10, 79%, 65%)"
    }
];

const myChart = document.getElementById('myChart');


let globalChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: data.map(item => item["day"]),
        datasets: [{
            label: 'earning for the week',
            data: data.map(item => item["amount"]),
            backgroundColor: data.map(item => item["color"]),
            borderRadius: 5,
        }]
    },
    options: {
        showLine: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'hsl(28, 10%, 53%)',
                    font:{
                        size: 12,
                        weight: 500
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            // title: {
            //     align: 'start',
            //     display: true,
            //     text: 'Spending - Last 7 days',
            //     font:{
            //         weight: 700,
            //         size: 28,
            //     },
            //     color: 'hsl(25, 47%, 15%)',
            //     padding: {
            //         bottom: 10
            //     }
            // },
            legend: {
                display: false
            },
            animation: true,
            animationEasing: 'easeInOutQuart',
            animationSteps: 200,
        }
    }
});

let animate = new ScrollReveal({
    origin: 'bottom',
    duration: 1000,
    distance: '60px'
});

animate.reveal('.header_section', {distance: '20px'});
animate.reveal('.displays', {distance: '40px', duration: 1500});

animate.reveal('.displays > h2', {distance: '40px', duration: 1800});
animate.reveal('.aside', {distance: '40px', duration: 2000});