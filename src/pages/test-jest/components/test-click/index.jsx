import React from 'react';

export default class TextClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onInputChanged(e) {
        this.setState({
            value: e.target.value,
        });
    }

    onClicked() {
        this.setState({
            value: '',
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="form">
                <input value={value} onChange={this.onInputChanged.bind(this)} />
                <button className="submit" onClick={this.onClicked.bind(this)}>
                    提交
                </button>
            </div>
        );
    }
}
