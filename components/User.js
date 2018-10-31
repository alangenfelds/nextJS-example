import React from 'react';

const user = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>Age: {props.age}</div>
            <style jsx>{`
                div {
                    border: 1px solid #eee;
                    box-shadow: 0 2p 3px #ccc;
                    padding: 20px;
                    text-align: center;
                },
                p {
                    color: green;
                }
                `}

            </style>
        </div>
    );
};

export default user;