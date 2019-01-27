import React from 'react';
import { Input, Button } from 'semantic-ui-react';

class InputExampleActionIconButton extends React.Component {
    state = { value: '' };
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };
    handleClick = (e) => {
        this.props.setSearchQuery(this.state.value);
    };

    render() {
        return (
            <Input type="text" placeholder="Название книги или автора" action>
                <input
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                />
                <Button onClick={this.handleClick}>Поиск</Button>
            </Input>
        );
    }
}

export default InputExampleActionIconButton;
