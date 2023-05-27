import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FetchdataContact = () => {
  const [contacts, setContacts] = useState([]);

  const navgi = useNavigate();

  const handleEdit = (id) => {
    navgi("/edit", { state: { id: id } });
  };

  const apiDelete = async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/contact/${id}`);
    location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respond = await axios.get("http://localhost:3000/contact");
        const data = respond.data;
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='mt-5 '>
        <div className='relative overflow-x-auto  shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Phone
                </th>
                <th scope='col' className='px-6 py-3'>
                  Email
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact) => (
                <tr
                  key={contact.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {contact.name}
                  </th>
                  <td className='px-6 py-4'>{contact.email}</td>
                  <td className='px-6 py-4'>{contact.phone}</td>
                  <td className='px-6 py-4 flex items-center space-x-5 text-lg font-bold '>
                    <Link to={`/edit/${contact.id}`}>
                      <FiEdit2 className='text-blue-500 cursor-pointer hover:text-blue-600  duration-300' />
                    </Link>
                    <AiFillDelete
                      onClick={() => apiDelete(contact.id)}
                      className='text-red-500 cursor-pointer hover:text-red-600 duration-300'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FetchdataContact;
