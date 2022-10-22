$(document).ready(function () { 
if (matchMedia('only screen and (min-width: 480px)').matches) {
    
            $('#pagepiling').pagepiling( {
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'red'],
            });
}
    });