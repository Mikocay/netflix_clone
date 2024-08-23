// SignOutConfirm.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SignOutConfirm({ onConfirm, onCancel }) {
  return (
    <Overlay>
      <Dialog>
        <p>Are you sure to sign out?</p>
        <p className='close' onClick={onCancel}>
          &times;
        </p>
        <ButtonContainer>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </ButtonContainer>
      </Dialog>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Dialog = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  button {
    margin: 0 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  button:first-of-type {
    &:hover {
      background-color: grey;
    }
    font-weight: bold;
    color: white;
  }

  button:last-of-type {
    &:hover {
      background-color: grey;
    }
    font-weight: bold;
    color: white;
  }
`;

SignOutConfirm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default SignOutConfirm;
