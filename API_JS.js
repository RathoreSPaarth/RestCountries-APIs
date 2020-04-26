// import { request } from "http";
var request = new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all')
request.send()

request.onload = function(){
    console.log("Flags of countries using APIs")
    var data = JSON.parse(this.response)
    for(var i = 0 ; i<250; i++)
    {   console.log(data[i].name)
        console.log(data[i].flag)
    }
}