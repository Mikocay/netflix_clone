import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header(props) {
  const navigate = useNavigate();

  return (
    <Container className='flex a-center j-between'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    background-color: #e50914;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.05rem;
  }
`;

Header.propTypes = {
  login: PropTypes.bool,
};

export default Header;
