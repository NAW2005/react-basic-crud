import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchdataContact from "./fetchingData/FetchdataContact";

const Contact = () => {

  return (
    <>
      <Link to={"/create"}>
        <button className='text-white font-semibold px-4 mt-10 hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg duration-300 py-2 bg-blue-500 rounded-lg text-sm'>
          Create New Contact
        </button>
      </Link>
      <FetchdataContact />
    </>
  );
};

export default Contact;
