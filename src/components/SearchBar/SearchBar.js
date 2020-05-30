import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

//SearchBar communicates with Yelp API
//Search by best match, highest rated, most reviewed

//https://www.yelp.com/developers/documentation/v3/business_search
//sort_by
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
    //dynamically create the list items needed to display the sort options
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => { //iterates over the keys in sortByOptions, then maps the values
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        return (<div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>)
    }
}

export default SearchBar;