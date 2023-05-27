import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = () => {
  const param = useParams();
  const nav = useNavigate();

  const [data, setData] = useState();
  const formData = useRef();

  useEffect(() => {
    const currentData = async () => {
      try {
        const respond = await axios.get(
          `http://localhost:3000/contact/${param.id}`
        );
        const data = respond.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    currentData();
  }, []);

  const updateapiUpdate = async (updateData) => {
    const { data } = await axios.patch(
      `http://localhost:3000/contact/${param.id}`,
      updateData
    );
    nav("/")
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, phone, email } = formData.current;

    const updateData = {
      name: name.value,
      phone: phone.value,
      email: email.value,
    };
    updateapiUpdate(updateData);
  };

  return (
    <>
      <form
        ref={formData}
        onSubmit={onSubmitHandler}
        className='mt-20 w-96 mx-auto space-y-3 border-2  p-5 shadow-lg rounded-md'
      >
        <h1 className='text-lg font-bold uppercase  text-gray-700'>
          Create New Contacts
        </h1>
        <div>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Name
          </label>
          <input
            defaultValue={data?.name}
            type='text'
            name='name'
            id='name'
            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Phone
          </label>
          <input
            defaultValue={data?.phone}
            name='phone'
            type='number'
            id='Phone'
            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <input
            defaultValue={data?.email}
            name='email'
            type='text'
            id='email'
            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div>
          <button className='text-sm bg-blue-500 hover:bg-blue-700 font-semibold text-white duration-300  px-5 py-2 rounded-md'>
            Create
          </button>
          <Link to={"/"}>
            <button className='text-sm bg-red-500 hover:bg-red-700 ml-2 font-semibold text-white duration-300  px-5 py-2 rounded-md'>
              Cancle
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Edit;
