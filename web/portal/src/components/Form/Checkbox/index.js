
// CSS
import styles from './style.css';

import React, { Component } from 'react';

import Question from '../Question';

class Checkbox extends Component {

    render() {
        const { data, onClick } = this.props;
        return (
            <div
                className="question"
                onClick={onClick}
            >
                <Question
                    text={data.label}
                />
                <div className={styles.checkboxGrp}>
                    {this._renderCheckboxItem()}
                </div>
            </div>
        );
    }

    _renderCheckboxItem() {
        const { data } = this.props;
        const items = data.data.map((itm, idx) => {
            const label = itm.label;
            const input = itm.input;
            return (
                <div
                    className={styles.checkboxItem}
                    key={idx}
                >
                    <input type="checkbox" />
                    <label>
                        {label}
                    </label>
                    {
                        input ?
                            <input
                                type="text"
                                className="input input--small"
                                placeholder={input}
                            /> :
                            ''
                    }
                </div>
            );
        });
        return items;
    }
}

export default Checkbox;