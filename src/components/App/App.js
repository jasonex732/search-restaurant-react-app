import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Fardos Pizzeria',
  address: '1010 Shit Teir Way',
  city: 'Minneapolis',
  state: 'MN',
  zipCode: '10101',
  category: 'Ass category',
  rating: -4.5,
  reviewCount: 2
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component { //The App component renders a SearchBar component and a BusinessList component.
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
