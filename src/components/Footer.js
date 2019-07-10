import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer class='navbar-fixed-bottom'>
          <div class='container'>
            <span class='text-muted'>Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
    // <div>Footer Vagyok</div>;
  }
}

export default Footer;
