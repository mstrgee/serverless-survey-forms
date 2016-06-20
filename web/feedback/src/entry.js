
import React from 'react';
import PureComponent from 'react-pure-render/component';
import ReactDOM from 'react-dom';

import Survey from '../../src/index';

class App extends PureComponent {
    render() {
    	return (
        	<div>
        		<Survey
                    surveyid='09145678'
                    localize_path='../../assets/L10N'
                />
        	</div>
        );
    }
}

function initApp() {
    ReactDOM.render(
        <App />,
        document.getElementById('main')
    );
}

initApp();

if (module.hot) {
    module.hot.accept();
}
