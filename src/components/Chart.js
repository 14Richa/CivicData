import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: ['delhi','surat','kota'],
				datasets: [
				{
					label: 'Population',
					data: [
					23456,
					65432,
					56788],
				backgroundColor: [
				'blue',
				'red',
				'black']
				}]
			},
			chartData2: {
				labels: ['delhi','surat','kota'],
				datasets: [
				{
					label: 'Population',
					data: [
					234,
					654,
					567],
				backgroundColor: [
				'blue',
				'red',
				'black']
				}]
			}
		}
	}
	render() {
		return (
			<div className = "chart">
			<Bar 
			data = {this.state.chartData}
			options = {{
				title:{
					display: true,
					text: ''
				},
				legend: {
					display: true,
				},
				layout: {
					padding: 150

				}
				}}
			/>

			<Pie
			data = {this.state.chartData2}
			options = {{
				title:{
					display: true,
					text: ''
				},
				legend: {
					display: true,
				},
				layout: {
					padding: 150

				}
			}}
			/>

			<Line
			data = {this.state.chartData}
			options = {{

				legend: {
					display: true,
				},
				layout: {
					padding: 150

				}
			}}
			/>

			</div>
			)
	}
}



export default Chart;
