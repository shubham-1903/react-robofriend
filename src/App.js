import React, { Component } from "react";
// import "./assets/output.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
// import { robots } from "./components/robots";
import ScrollList from "./components/Scroll";
import background from "./img/design-tools.jpg";
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: "",
		};
		console.log("constructor");
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({robots: users}));
		console.log("componentDidMount");
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filterRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		console.log("renders");
		if (this.state.robots.length === 0) {
			return <h1 className='text-4xl text-red-500 text-center'
						style={{ backgroundImage: `url('${background}')` }}
			>
				LOADING
			</h1>;
		} else {
			return (
				<>
					<div
						className=' dark:bg-gray-800 bg-hero-pattern bg-auto bg-fixed'
						style={{ backgroundImage: `url('${background}')` }}
					>
						<div className='container mx-auto' style={{overflow: 'hidden'}}>
							<div className='text-center'>
								<h1 className='p-2 text-6xl md:text-8xl text-green-500 italic font-bold tracking-wide'>
									ROBOFRIENDS
								</h1>
								<SearchBox searchChange={this.onSearchChange} />
							</div>
							<ScrollList>
								<div className='p-5 flex flex-wrap justify-around  md:flex-wrap'>
									<CardList robots={filterRobots} />
								</div>
							</ScrollList>
						</div>
					</div>
				</>
			);
		}
	}
}

export default App;
