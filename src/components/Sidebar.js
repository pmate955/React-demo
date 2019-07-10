import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidebar extends React.Component {
  render () {
    return (
      <div class='row'>
        <nav class='col-md-6 d-none d-md-block bg-light sidebar'>
          <div class='sidebar-sticky'>
            <ul class='nav flex-column'>
              <li class='nav-item'>
                <a class='nav-link active' href='#'>
                  <span data-feather='home' />
            Dashboard <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <span data-feather='file' />
            Orders
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <span data-feather='shopping-cart' />
            Products
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <span data-feather='users' />
            Customers
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <span data-feather='bar-chart-2' />
            Reports
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  <span data-feather='layers' />
            Integrations
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>);
    // <div>Sidebar Vagyok</div>;
  }
}

export default Sidebar;
