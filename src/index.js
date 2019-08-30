import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './styles/css/custom/style.min.css'
import Greeting from './lib/'

class App extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <main role="main-content">
                <section role="content-section">
                    <div className="title">
                        {Greeting("Create-npm-package-js")}
                    </div>
                </section>
            </main>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById('root'));