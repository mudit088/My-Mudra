import React from 'react';

const Nav = () => {
  return (
    

    <nav className="bg-teal-500 text-white p-4 flex items-center justify-between ">
          
          <div className="ml-8 text-18px ">
              <ul className="space-x-28 flex items-center">
                      <li>
                            <a href="/" className="flex items-center">
                              Home Page
                            </a>
                      </li>
                    <li className="relative group">
                      <a href="#" className="flex items-center">
                        Customer Management
                      </a>
                  
                      </li>
                      <li>
                        <a href="/rejection-manager" className="flex items-center">
                          Rejection Manager
                        </a>
                      </li>
                        <li>
                            <a href="/loan-book" className="flex items-center">
                              Loan Book
                            </a>
                        </li>
                        <li>
                      <a href="/login-book" className="flex items-center">
                        Login Book
                      </a>
                  </li>
                  <li>
                    <a href="/dashboard" className="flex items-center">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/post-management" className="flex items-center">
                      Post Management
                    </a>
                  </li>
                  <li>
                    <a href="/masters" className="flex items-center">
                      Masters
                    </a>
                  </li>
                </ul>
          </div>
        </nav>
  );
}

export default Nav;
