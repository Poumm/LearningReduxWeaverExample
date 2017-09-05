import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component{

    renderWeather (cityData){
       
        const cityName = cityData.city.name;
        
        // -273 convert to celsius
        const temps = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);


        return(
            <tr key={cityName} >
                <td>{cityName}</td>
                <td>
                    <Chart color="orange" data={temps} units="°"/>
                </td>
                <td>
                    <Chart color="green" data={pressures} units="hPa"/>
                </td>
                <td>
                    <Chart color="blue" data={humidity} units="%"/>
                </td>
            </tr>
       );
    }

    render (){
        return (
            <table className="table table-over">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°)</th>
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

function mapStateToProps({weather}){
    console.log( weather );
    return { weather };
}

export default connect (mapStateToProps) (WeatherList);