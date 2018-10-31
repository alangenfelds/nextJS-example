import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';


class IndexPage extends Component {

    static  getInitialProps(context) {
        console.log('getInitialProps', context);
            const promise = new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve( {appName: 'My NextJS App'} );
                }, 1000)
            });

            return promise;
    }

    render() {
        return (
            <div>
                <div>The Main Page of <b>{this.props.appName}</b></div>
                <p>Go to &nbsp;
                    <Link href="/auth"><a>Auth</a></Link>
                </p>
                <button onClick={ () => { Router.push('/auth') } }>Go to Auth</button>
            </div>
        );
    }
    
};

export default IndexPage;