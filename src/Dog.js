import React, { useState, useEffect } from 'react';

function Dog() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response has an 'imageUrl' property
        setImageUrl(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <br></br>
      <h2>Random Dog Picture!</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched from API" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dog;