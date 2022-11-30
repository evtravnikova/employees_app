import {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchString = e.target.value;
        this.setState({searchString});
        this.props.onUpdateSearch(searchString)
    }

    render() {
        return (
            <input
                type="text"
                className='form-control search-input'
                placeholder='Знайти працівника'
                value={this.state.searchString}
                onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;