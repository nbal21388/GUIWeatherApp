import "./searchresort";
import Button from './Button';

function searchresort() {
    const onClick = () => {
      var id = document.getElementsByName("searchInput");
      console.log(id.value)
      console.log("Click")
    }
      
    return (
      <div className="App">
        <h1>Weather App</h1>
        <h2>Search</h2>
        <div className="Searchinput">
          <input name="searchInput" type="text"></input>
          <Button onClick={onClick}/>
        </div>
      </div>
    );
  }
  
  export default searchresort;