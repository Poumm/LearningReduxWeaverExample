import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        
        this.state = { term : '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        
        this.setState({term : event.target.value});
        console.log(event.target.value);
    }

    render(){
        return (
            <form className="input-group">
                <input 
                    placeholder="Search city"
                    className="form-control"
                    value={this.state.term} 
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;