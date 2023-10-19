import React from 'react';

const ViewFeedback = ({rowDto}:{rowDto:any}) => {
    return (
        <div>
            <h6 className="mb-2">Subject: {rowDto?.subject}</h6>
            <p>Message: <br /> {rowDto?.message}</p> 
        </div>
    );
};

export default ViewFeedback;