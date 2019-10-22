import React from 'react';

class SearchBar extends React.Component {
    state ={term: ''};

    // Using Arrow Function here to gain benefit of ES2015 and letting the class SearchBar 'this' be passed down within the function
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label >Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;