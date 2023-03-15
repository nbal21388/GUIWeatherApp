  
  import Weathericons from "./Weathericons";
  //TASK TO DO
   // align everything using CSS for eg temperature must be at top and the rest conditions bottom
    //find and align images for these conditions 
  //To display information everyting is in object called weatherData
  
  // if time user enter website<sunset time make background dark (show night) both users current time and sunset sunrise timings are in object called weatherData
  
 
 

 function Displayinfo(props){
    const{weatherData}=props
  


    return (
        <>
          {weatherData ? (
            <div>
              <p>Temperature: {weatherData.Temperature}</p>  
              <p>Rainfall: {weatherData.Rainfall}</p>
              <p>Humidity: {weatherData.Humidity}</p>
              <Weathericons icons={weatherData.icon}/>
              
              <p>Description: {weatherData.weatherDescription}</p>
              <p>Snow:{weatherData.Snow}</p>
             
            </div>
          ) : (
            console.log('some data loading')
          )}
        </>
      );

          }
        
    export default Displayinfo;
 
  