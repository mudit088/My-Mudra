import React from 'react'
import { useState } from 'react';

const Filters = () => {
    const[search,setSearch]=useState('')
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
        { id: 1, name: 'John Doe', email: 'john@example.com' , number :'455353' , Rno : '545' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' , number :'455353' , Rno : '545'},
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' , number :'455353' , Rno : '545'},
      ];
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.number.includes(search) ||
        item.Rno.includes(search)
    );
      
            return (
                <div>
                    <div>
                        <form>
                        <input type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here"
                        className="w-96 p-4 rounded-full ml-44 " />
                        </form>
                    </div>
                <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>number</th>
                <th>Rno</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((val,i) => (
                <tr key={val.i}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.number}</td>
                    <td>{val.Rno}</td>
                </tr>
                ))}
            </tbody>
            </table>
                </div>
            )
            }

export default Filters