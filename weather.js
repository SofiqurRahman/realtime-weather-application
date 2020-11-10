class Weather{
  constructor(city){
    this.city=city;
    this.appId='3f54d30502ad1eadac795a0e1f8139fa';
  }
  async getWeather(){
    const resdata=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appId}`);
    const resultData=await resdata.json();
    return resultData;
  }
}