import React, { useState } from 'react';
import axios from "axios";
const options = [
  { value: '', label: '--Please choose a movie--' },
  { value: 'Pathan', label: 'Pathan' },
  { value: 'The Jungle Book', label: 'The Jungle Book' },
  { value: 'Dilwale Dulhania Le Jayenge (DDLJ)', label: 'Dilwale Dulhania Le Jayenge (DDLJ)' }
];

const MovieForm = () => {
  const [formData, setFormData] = useState({
    movie_name: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


 
// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Movie selected: ${formData.movie_name}`);
//     // add code here to submit the form data to a backend or do something with it
//     axios.post('http://127.0.0.1:5000/api/submit', formData)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Movie selected: ${formData.movie_name}`);
    // try {
    //   await axios.post('/submit-form', formData);
    //   // handle success
    // } catch (error) {
    //   // handle error
    // }





    var myParams = {
      data: formData
  }

  
      axios.post('/api/query', myParams)
          .then(function(response){
              console.log(response);
     //Perform action based on response
      })
      .catch(function(error){
          console.log(error);
     //Perform action based on error
      });


  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movie_name">Select a movie:</label>
      <select id="movie_name" name="movie_name" value={formData.movie_name} onChange={handleInputChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;
