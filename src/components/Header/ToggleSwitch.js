import React from 'react'
import './ToggleSwitch.css'
class ToggleSwitch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOn: false};
	}
	
	handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
	}
	
	render() {
		let classNames = ["component-wrapper", (this.state.isOn) ? "component-wrapper_is-light" : "component-wrapper_is-dark"].join(" ");
		return (
			<div className={classNames}>
				<Switch 
					isOn={this.state.isOn}	
					handleToggle={this.handleToggle.bind(this)}
				/>
			</div>		
		);
	}
}


const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}	
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

export default ToggleSwitch