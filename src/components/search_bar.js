import React from 'react'

// class based component
class SearchBar extends React.Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

// export the components
export default SearchBar;