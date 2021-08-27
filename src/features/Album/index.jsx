import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Justin Bieber',
            imgUrl: 'https://c8.alamy.com/comp/F7K2HT/justin-bieber-us-pop-singer-in-november-2015-photo-jeffrey-mayer-F7K2HT.jpg'
        },
        {
            id: 2,
            name: 'Son Tung MTP',
            imgUrl: 'https://r2h8t4h7.stackpathcdn.com/wp-content/uploads/2021/05/a-997x1024.jpeg'
        },
        {
            id: 1,
            name: 'Lionel Messi',
            imgUrl: 'https://i5.walmartimages.com/asr/c33d70dc-7a37-4fd0-8795-bf5923fe2ee4.5e0e9427796c849588806939b4163e3e.jpeg'
        }
    ]

    return (
        <div>
            <h2 style={{marginLeft: '2rem', color: '#e85959'}}>Maybe You Like</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;