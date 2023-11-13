import React, { useState } from 'react';
import { data } from '../data';

const Filters = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const filteredData = data.filter(
    (item) =>
      item.Name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.Rno.includes(search)
  );

  const lastIndexOfCurrentPage = currentPage * recordsPerPage;
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - recordsPerPage;
  const currentRecords = filteredData.slice(
    firstIndexOfCurrentPage,
    lastIndexOfCurrentPage
  );

  const totalPageCount = Math.ceil(filteredData.length / recordsPerPage);
  const pageNumbers = [...Array(totalPageCount).keys()].map((num) => num + 1);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4">
        <form>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
            className="w-64 bg-teal-500 rounded-full h-12 w-16 rounded-full ml-4 m-6 pl-4"
          />
        </form>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Rno</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((val) => (
            <tr key={val.ID} className="hover:bg-gray-50">
              <td className="py-2 px-4">{val.ID}</td>
              <td className="py-2 px-4">{val.Name}</td>
              <td className="py-2 px-4">{val.email}</td>
              <td className="py-2 px-4">{val.phone}</td>
              <td className="py-2 px-4">{val.Rno}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="mt-4">
        <ul className="flex list-none">
          <li className="mr-2">
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="mr-2">
              <button
                className={`bg-teal-500 text-white px-4 py-2 rounded ${
                  currentPage === number ? 'bg-teal-700' : ''
                }`}
                onClick={() => changeCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={nextPage}
              disabled={currentPage === totalPageCount}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Filters;
