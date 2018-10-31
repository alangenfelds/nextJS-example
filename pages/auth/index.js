import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => {
    return (
        <div>
            <div>The AUTH Index Page - <b>{props.appName}</b></div>
            <User name="Artur" age={39} />
        </div>
    );
};

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( {appName: 'My NextJS App (AUTH)'} );
        }, 1000)
    });

    return promise;
}

export default authIndexPage;