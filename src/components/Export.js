import React, { Component } from 'react';

//Exports multiple components from a single file – handles root components.

export default class ExportComponent extends Component {
    render() {
        return (
            <div>
                <h1>Export</h1>
                <p>This is an example of using the Export class.</p>
                <button onClick={alert('Say Hello! (keeping it simple)')}>Export Button</button>
            </div> 
        );
    }
};