import React from 'react';
import Columns from './column'
import HooksState from './hooks-state'
import {BuggyCounter, ErrorBoundary} from './error-boundary';

class Table extends React.Component {
    constructor(props){
        super();
        this.state = {
            skills : [
                {
                    name: 'Javascript',
                    level: 'Intermediate'
                },
                {
                    name: 'NodeJS',
                    level: 'Low'
                },
                {
                    name: 'Python',
                    level: 'High'
                }
            ]
        }
    }
    render() {
      return (
          <div>
            <h2>Use Error Boundaries</h2>
            <p>Click 6 times the button to launch error</p>
                <ErrorBoundary>
                    <BuggyCounter />
                </ErrorBoundary>
            <h2>Use Hooks</h2>
                <HooksState />
            <h2>Use Fragment</h2>
            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>              
                    <Columns items={this.state.skills} />
                </tbody>
            </table>
        </div>
      );
    }
}

export default Table;