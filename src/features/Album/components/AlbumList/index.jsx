import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Album from '../Album';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <ul className="album__list">
      {albumList.map((album) => (
        <li id={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
