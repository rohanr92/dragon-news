import React from 'react';
import { useParams } from 'react-router';

const AllCategories = () => {
    let {id} = useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default AllCategories;