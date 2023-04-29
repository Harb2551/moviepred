import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Movie selected: ${formData.movie_name}`);
    // add code here to submit the form data to a backend or do something with it
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
