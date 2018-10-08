import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
	render() {
		return (
			<input type="text" placeholder="Enter your search term" name=""/>
		)
	}
}

class Fuckery extends React.Component {
	render(){
		return (
			<input type="submit"/>
		)
	}
}

class App extends React.Component{
	render() {
		return (
			<div>
				<h1>Git Some</h1>
				<SearchBar />
				<Fuckery />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

