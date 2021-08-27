import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
  const history = useHistory();
    console.log(history)
    
    const locatio = useLocation();
    console.log(locatio)
    
    const params = useParams();
    console.log(params)

    const rou = useRouteMatch();
    console.log(rou)
    return (
        <div>
          Detail Page  
        </div>
    );
}

export default DetailPage;