import React, { Component } from 'react';
import Connect, { connect } from 'react-redux';
import Chart from '../components/charts';

class WeatherList extends Component {
	
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);


		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart color="red" data={temps} units="K" /></td>
				<td><Chart color="green" data={pressures} units="hPa" /></td>
				<td><Chart color="black" data={humidities} units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>	
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
	
}

function mapStateToProps({weather}) {
	return { weather }
	//	Same as return { weather: state.weather } and having parameter as state instead of {weather}
}

export default connect(mapStateToProps)(WeatherList);