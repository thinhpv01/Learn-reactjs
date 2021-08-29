import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <img className="album__img" src={album.imgUrl}></img>
      <p className="album__title">{album.name}</p>
    </div>
  );
}

export default Album;
