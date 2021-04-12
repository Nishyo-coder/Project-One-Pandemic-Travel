var submitBtn = document.querySelector("#submitBtn");

//api fetch request for the quarantine api
function getApi() {
    var requestUrl = "https://api.quarantine.country/api/v1/summary/latest";
    
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
}






// added event listener to submit button, once clicked it will run get api function
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    getApi()
});