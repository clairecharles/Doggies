import React, { Component } from "react";
import { LoginError } from "../../Componenets/LoginError.js";
import "./Login.css";
import {Link} from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			formErrors: { email: "", password: "" },
			emailValid: false,
			passwordValid: false,
			formValid: false,
		};
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);  
		});
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch (fieldName) {
			case "email":
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.Email = emailValid ? "" : " is invalid";
				break;
			case "password":
				passwordValid = value.length >= 6;
				fieldValidationErrors.Password = passwordValid ? "" : " is too short";
				break;
			default:
				break;
		}
		this.setState(
			{
				formErrors: fieldValidationErrors,
				emailValid: emailValid,
				passwordValid: passwordValid,
			},
			this.validateForm
		);
	}

	validateForm() {
		this.setState({
			formValid: this.state.emailValid && this.state.passwordValid,
		});
	}

	errorClass(error) {
		return error.length === 0 ? "" : "has-error";
	}

	render() {
		return (
			<form className="demoForm">
				<h2>Sign up</h2>
				<div className="panel panel-default">
					<LoginError formErrors={this.state.formErrors} />
				</div>
				<div
					className='special-form'
				>
					<label htmlFor="email" className="text">
						Full Name:
					</label>
					<input
						type="Text"
						required
						className="special"
						name="email"
						placeholder="Full Name eg(John Doe)"
					/>
				</div>
				<div
					className={`form-group ${this.errorClass(
						this.state.formErrors.email
					)}`}
				>
					<label htmlFor="email" className="text">
						Email
					</label>
					<input
						type="email"
						required
						className="special"
						name="email"
						placeholder="Email eg(example@gmail.com)"
						value={this.state.email}
						onChange={this.handleUserInput}
					/>
				</div>
				<div
					className={`form-group ${this.errorClass(
						this.state.formErrors.password
					)}`}
				>
					<label htmlFor="password" className="text">
						Password:
					</label>
					<input
						type="password"
						className="special"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleUserInput}
					/>
				</div>

				<Link to="/home">
					<button
						type="submit"
						className="btn"
						disabled={!this.state.formValid}
					>
						Sign up
					</button>
				</Link>
			</form>
		);
	}
}

export default Login;