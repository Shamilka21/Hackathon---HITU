import { Button, Paper } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import houseContext, {
  useHouse,
  useProducts,
} from '../../contexts/HouseContext';
// import { useHistory } from 'react-router';
import './AddHouse.css';

const AddHouse = () => {
  const { addHouse } = useHouse();

  const [form, setForm] = useState({
    title: '',
    image: '',
    type: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.title &&
      !form.image &&
      !form.type &&
      !form.description &&
      !form.price
    ) {
      alert('All inputs should be filled !');
      return;
    }
    await addHouse({ ...form });
  };

  return (
    <div className="back-add">
      <div className="add-house">
        <Paper className="paper">
          <div>
            <h1 className="h1-add">Add House</h1>
          </div>
          <form className="add-form" onSubmit={handleSubmit}>
<<<<<<< HEAD
            <input type="text" onChange={handleChange} placeholder="Title" name="title" value={form.title} />
            <input type="text" onChange={handleChange} placeholder="Image" name="image" value={form.image} />
            <input type="text" onChange={handleChange} placeholder="Type" name="type" value={form.type} />
            <input type="text" onChange={handleChange} placeholder="Description" name="description" value={form.description} />
            <input type="text" onChange={handleChange} placeholder="Price" name="price" value={form.price} />
            <Button className="btn-add">Добавить</Button>
=======
            <input
              type="text"
              onChange={handleChange}
              placeholder="Title"
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
              value={form.type}
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Description"
              name="description"
              value={form.description}
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Price"
              name="price"
              value={form.price}
            />
            <Button type="submit" className="btn-add">
              Добавить
            </Button>
>>>>>>> 53fc6214d47c9f5246c139cfd72926530e0bcc85
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default AddHouse;
