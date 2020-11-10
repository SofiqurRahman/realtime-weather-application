const ui=new UI;
async function getCity(){
  const city=await fetch('http://ip-api.com/json');
  const data=await city.json();
  return data;
}
getCity().then(data=>{
  const weather=new Weather(data.city);
  console.log(data.city);
  weather.getWeather().then(data=>{
    console.log(data);
    ui.paint(data);
  }).catch(err=>{
    console.log(err);
    ui.notFound();
  })
});
document.getElementById('w-change-btn').addEventListener('click',()=>{
  const city=document.getElementById('city').value;
  if(city===''){
    alert('You must need a valid city name');
  }else{
    const weather=new Weather(city);
    weather.getWeather().then(data=>{
    ui.paint(data);
    }).catch(err=>{
    console.log(err);
    ui.notFound();
    })
  }
})