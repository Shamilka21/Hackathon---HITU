import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { movieContext } from '../../contexts/MovieContext';

const AddHouse = () => {
  const [form, setForm] = useState({
    image: '',
    type: '',
    description: '',
  });

  const { addMovie } = useContext(movieContext);

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title && !form.image && !form.genre && !form.description) {
      alert('Все поля должны быть заполнены');
      return;
    }
    await addHouse({ ...form, seen: false });
  };

  return (
    <div>
      <Button></Button>
      <h1>Add House</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="House"
          name="title"
          value={form.title}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Image"
          name="image"
          value={form.image}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type"
          name="type"
          value={form.genre}
        />
        <textarea
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Описание"
          name="description"
          value={form.description}
        ></textarea>
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default AddMovie;
