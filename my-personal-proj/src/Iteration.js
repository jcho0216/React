import React from 'react';

const Iteration = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const namesList = names.map(names=> <li>{names}</li>);
    return <ul>{namesList}</ul>
};

export default Iteration;