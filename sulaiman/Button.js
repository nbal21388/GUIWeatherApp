import { useState } from 'react';


export default function Button() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    const showLocation = (arr) => {
        console.log(arr)
        console.log(arr.length)
        var result = "";
        arr.forEach(element => {
            var resultTemp = "";
            resultTemp =  element.display_name + " Latitude:" + element.lat + " Longitude:" + element.lon
            result +=  resultTemp
            console.log(resultTemp)
        });
        setUpdated(result);
    }
    var addressArr = []
    const url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + message
    fetch(url)
          .then(response => response.json())
          .then(data => addressArr = data)
          .then(show => showLocation(addressArr))
          .catch(err => console.log(err))
  }
    


  return (
    <div>
        <h1>Weather App</h1>
        <h2>Search</h2>
        <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
        />

        <h2>Location: {updated}</h2>

        <button onClick={handleClick}>Search</button>
    </div>
  );
}