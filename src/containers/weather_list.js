import React, { Component } from 'react';
import Connect, { connect } from 'react-redux';
class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>	
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
	renderWeather(cityData) {
		const name = cityData.city.name;
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		)
	}
}

function mapStateToProps({weather}) {
	return { weather }
	//	Same as return { weather: state.weather } and having parameter as state instead of {weather}
}

export default connect(mapStateToProps)(WeatherList);