import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDataByGenre } from '../store';

function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();

  return (
    <Select
      className='flex'
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}
const Select = styled.select`
  margin-left: 50px;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  option {
    background-color: #181818;
    color: white;
  }
`;

SelectGenre.propTypes = {
  genres: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default SelectGenre;
