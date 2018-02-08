console.log('connected');
var cityNames = ['nyc', 'la', 'sf', 'austin', 'sydney'];

cityNames.forEach(function(city) {
  $('#city-type').append("<option>" + city+ "</option>");
})

$('#city-type').change(function(event) {
  event.preventDefault();
  var userInput = $('#city-type').val()
  if (userInput === 'nyc') {
    $('body').addClass('nyc')
  } else if (userInput === 'la') {
    $('body').addClass('la')
  } else if (userInput === 'sf') {
    $('body').addClass('sf')
  } else if (userInput === 'austin') {
    $('body').addClass('austin')
  } else if (userInput === 'sydney') {
    $('body').addClass('sydney')
  }
})
