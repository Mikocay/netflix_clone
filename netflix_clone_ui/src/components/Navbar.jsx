import { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import SignOutConfirm from './SignOutConfirm';
import PropTypes from 'prop-types';

function Navbar({ isScrolled }) {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'TV Shows', path: '/tv' },
    { name: 'Movies', path: '/movies' },
    { name: 'My List', path: '/mylist' },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate('/login');
    }
  });

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);

  const handleSignOutClick = () => {
    setShowSignOutConfirm(!showSignOutConfirm);
  };

  const handleConfirmSignOut = () => {
    setShowSignOutConfirm(false);
    signOut(firebaseAuth);
  };

  const handleCancel = () => {
    setShowSignOutConfirm(false);
  };

  return (
    <Container>
      <nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
        <div className='left flex a-center'>
          <div className='brand flex a-center j-center'>
            <img src={logo} alt='logo' />
          </div>
          <ul className='links flex'>
            {links.map((name, index) => {
              return (
                <li key={index}>
                  <Link to={name.path}>{name.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='right flex a-center'>
          <div className={`search ${showSearch ? 'show-search' : ''}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type='text'
              placeholder='Search'
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}
            />
          </div>
          <button onClick={handleSignOutClick}>
            <FaPowerOff />
          </button>

          {showSignOutConfirm && (
            <SignOutConfirm
              onConfirm={handleConfirmSignOut}
              onCancel={handleCancel}
            />
          )}
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: fixed; /* Chỉ cần một khai báo position */
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    z-index: 2;
    padding: 0 2rem;
    align-items: center;
    transition: 0.3s ease-in-out;

    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
            transition: 0.3s ease-in-out;
            &:hover {
              color: #e5e5e5;
            }
          }
        }
      }
    }

    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }

      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;

        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }

        input {
          opacity: 0;
          visibility: hidden;
          width: 0;
          background-color: transparent;
          border: none;
          color: white;
          transition: 0.3s ease-in-out;
          &:focus {
            outline: none;
          }
        }
      }

      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0.2rem;
        input {
          opacity: 1;
          visibility: visible;
          width: 10rem;
          padding: 0.3rem;
          border-radius: 0.2rem;
        }
      }
    }
  }
`;

Navbar.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default Navbar;
