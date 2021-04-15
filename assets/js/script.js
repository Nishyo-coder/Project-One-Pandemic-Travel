var submitBtn = document.querySelector('#submitBtn');
var userInput = document.querySelector('#input');
var newsData = document.querySelector('#News-Data');
var headline3 = document.querySelector('#headline3');
var regionName = document.querySelector('#regionName');
var totalCases = document.querySelector('#totalCases');
var activeCases = document.querySelector('#activeCases');
var tested = document.querySelector('#tested');
var recovered = document.querySelector('#recovered');
var article = document.querySelector('#articleLink')


function getApi() {


  var requestUrl = "https://api.quarantine.country/api/v1/summary/region?region=" + userInput.value;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      regionName.textContent = 'Location: ' + userInput.value;
      totalCases.textContent = 'Total Cases: ' + data.data.summary.total_cases;
      activeCases.textContent = 'Active Cases: ' + data.data.summary.active_cases;
      tested.textContent = 'Tested: ' + data.data.summary.tested;
      recovered.textContent = 'Recovered: ' + data.data.summary.recovered;

    });
  getApi2()
}


function getApi2() {

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput.value + "&api-key=M9PdcDIgU9B7PWlHaLGVwGjditZa1CaJ";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var snip = data.response.docs[0].snippet;
      var newsHeadline = data.response.docs[0].headline.main
      console.log("NYT snip= " + snip);
      newsData.textContent = snip;
      headline3.textContent = newsHeadline;
      article.textContent = data.response.docs[0].web_url;
    });


}






// added event listener to submit button, once clicked it will run get api function
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  getApi()

});