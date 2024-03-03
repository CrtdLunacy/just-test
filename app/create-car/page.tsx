'use client'

import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000000).toString(), // Генерация рандомного id
    Image: '',
    Brand: '',
    Model: '',
    Color: '',
    Price: 0,
    Year: 0,
    Engine_Type: 'Petrol',
    Transmission: 'Automatic',
    Range: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.NEXT_API_CLIENT_URL}/cars`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <div className={'flex flex-col justify-center items-center'}>
      <h2>Форма создания машины</h2>
      <form className={'flex flex-col w-[550px] gap-2 justify-center backdrop-blur-sm bg-white/30 rounded-2xl p-10'} onSubmit={handleSubmit}>
        <label className={'flex justify-between'}>
          Изображение:
          <input  type="text" name="Image" value={formData.Image} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Марка:
          <input  type="text" name="Brand" value={formData.Brand} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Модель:
          <input  type="text" name="Model" value={formData.Model} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Цвет:
          <input  type="text" name="Color" value={formData.Color} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Цена:
          <input  type="number" name="Price" value={formData.Price} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Год выпуска:
          <input  type="number" name="Year" value={formData.Year} onChange={handleChange} />
        </label>
        <br />
        <label className={'flex justify-between'}>
          Тип двигателя:
          <select  name="Engine_Type" value={formData.Engine_Type} onChange={handleChange}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </label>
        <br />
        <label className={'flex justify-between'}>
          Трансмиссия:
          <select  name="Transmission" value={formData.Transmission} onChange={handleChange}>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
            <option value="Automated Manual">Automated Manual</option>
          </select>
        </label>
        <br />
        <label className={'flex justify-between'}>
          Пробег:
          <input  type="number" name="Range" value={formData.Range} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Создать машину</button>
      </form>
    </div>
  );
}
