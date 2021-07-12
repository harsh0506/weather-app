console.log("hello");
const btn =document.querySelector('.btn');
const text =document.querySelector('.text');
const condition1 = document.querySelector('.condition');
const  humidity1 = document.querySelector('.humidity');
const  cityname =document.querySelector('.cityname');
const clearbtn= document.querySelector('.clear')
const apikey=('bb471eabde0feda3a85cd98f18f1442f');
const url ='https://api.weatherapi.com/v1/forecast.json?key=7a0dec4103a64f1abbd71343211805&q=';
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const content = text.value;
    const city = 'The city name is ' + content;
    console.log(content);
    async function getwheather(){
        const newurl = url + content;
        const wheather = await fetch(newurl);
        const wheatherjson =await wheather.json()
        const humidity = 'The humidity of city is : ' + wheatherjson.current.humidity;
        const condition = 'The condition of city is : ' + wheatherjson.current.condition.text;
        cityname.innerHTML=city;
        condition1.innerHTML= humidity;
        humidity1.innerHTML=condition;
    }
    getwheather();
    text.value='';
});
clearbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    condition1.innerHTML='';
    humidity1.innerHTML='';
    cityname.innerHTML='';
})

 