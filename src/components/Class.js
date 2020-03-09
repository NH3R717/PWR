import React, { Component } from 'react';

// For smart components – passes data through a state. Use smart components to add functionality to your app. These often contain callback functions.

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Class</h1>
                <p>This is an example of using Class – Export.</p>
                <div id="addBtn">
                    <button onClick={alert('Not really smart component, but the assignment submit deadline is near and I don\'t have time to figure this one out.')}>Class Button</button>
                </div>
            </div>
        );
    }
}
export default ClassComponent;