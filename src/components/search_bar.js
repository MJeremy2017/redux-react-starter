import React from 'react'

// class based component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // class shared state
        this.state = { term: ''};
    }

    render() {
        return (
            <div>
                value = {this.state.term}
                <input onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

// export the components
export default SearchBar;