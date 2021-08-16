import React from 'react';

const Loading = () => {
    const style = {
        fontWeight: '900',
        fontSize: '20px',
        color: '#09B5FE',
    };
    return (
        <div className="container">
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: '100vh' }}
            >
                <div className="text-center">
                    <img className="img-fluid" src="https://i.imgur.com/Eh7VgGs.gif" alt="" />
                    <h5 style={style}>Loading...</h5>
                </div>
            </div>
        </div>
    );
};

export default Loading;
