import React from 'react';
import { Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="shadow-sm admin">
        <div class="container-nav-admin ps-5 pe-5 d-flex align-items-center justify-content-lg-between">
          <div class="link d-flex">
            <Link>
              <p className="text-muted text-decoration-underline pe-1">DASHBOARD </p>
            </Link>
            /
            <Link>
              <p className="text-muted text-decoration-underline ps-1"> LOGOUT</p>
            </Link>
          </div>
          <div class="person d-flex">
            <p className="text-muted  pe-2">Hallo, Donny !</p>
            <Person size={24} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
