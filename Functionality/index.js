

var username = 'surajkm';
    var password = 'Iamsurajk25';
    var apikey = '39eaaf5b21e794d8c471d08570621f97';
    
// function Firstfun() {
      
    
//    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+SearchbyenteringCityname.value+'&lang=hi&appid='+apikey+'&units=metric', username,password)
//    .then(response =>{
//     const soliddata = response.data;
//     console.log(soliddata);
//      document.getElementById('maindata').innerHTML = `${soliddata.main.feels_like}`;
//    }).catch(error=> {
//          console.log(error);
//    })
        // xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+SearchbyenteringCityname.value+'&lang=hi&appid='+apikey+'&units=metric', username,password);
        
        // xhr.send();
        
        //     xhr.onreadystatechange = function() {
        //         if (xhr.readyState === 4 && xhr.status === 200) {
        //             var data = xhr.response;
        //             printCities(data);  
        //             // console.log(changeddata.);
        //             document.querySelector('#name1').innerHTML = this.getResponseHeader('temp');
                     
                 
        //         }else{
        //             console.error();
        //         }
        
        // }};
        // function printCities(data) {
     
        //     console.log(data);
            
        
        // }    

// }

window.onload = function loadalldata() {
 axios.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi&Ahmedabad&lang=en&appid='+apikey+'&units=metric',username,password)
 .then(Response=>{
      console.log(Response.data);
      document.getElementById('cityName').innerHTML = Response.data.name;
      document.getElementById('temperature').innerHTML = Response.data.main.temp;
 }).catch(error =>{
      console.log("error occured"+error);
 })         
}





