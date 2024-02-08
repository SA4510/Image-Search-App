import axios from "axios";
import { useState } from "react";

export default function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=sbuw-VsV65yfn6hdl0BnfKwTj0n_0NLGpgIrWYDY020`)
      .then((response) => {
        setResult(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className='container text-center my-5'>
        
        <input type="text" className='form-control' placeholder="type something to search..." value={photo} onChange={(e) => {
          setPhoto(e.target.value);
        }} />
        <button type="submit" onClick={changePhoto} className="btn btn-primary my-2">Search</button>
      </div>
      <div className="container">
        <div className="row text-center text-lg-start">
          {result.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
