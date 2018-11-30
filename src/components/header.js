import React, { Component } from 'react'
import { Link } from 'gatsby'

const navbarLinks = [
  { title: 'Home', link: '/'},
  { title: 'Projects', link: '/projects' },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  };

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
       <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to="/">
            {siteTitle}
          </Link>
          <button 
            className={`navbar-burger ${burgerClass}`} 
            type="button"
            aria-label="menu" 
            onClick={this.handleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            {navbarLinks.map(navbarLink => (
              <Link 
                className={'navbar-item'}
                to={navbarLink.link} 
                key={navbarLink.title}
              >
                {navbarLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
     </nav>
    );
  };
}

export default Header
