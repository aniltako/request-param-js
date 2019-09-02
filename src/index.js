import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './styles/css/custom/style.min.css'
import {getRequestParams} from './lib/'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            requestParams: {
                searchText: 'john',
                page: 1,
                size: 10,
            }
        }
    }

    render(){
        return(
            <main role="main-content">
                <section role="content-section">
                    <div className="title">
                        {getRequestParams(this.state.requestParams)}
                    </div>
                </section>
            </main>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById('root'));