import React, { useState, useEffect } from "react";
import Logo from '../WebizyLogoTransparent.png';
import Recaptcha from "react-recaptcha";
import "../CSS/LoginPage.css";

function LoginPage() {
	const [Phonenumber, setPhonenumber] = useState("");
	const [Password, setPassword] = useState("");
	const [validateRecaptcha, setValidateRecaptcha] = useState(false);
	const [validPhoneNumber, setValidPhoneNumber] = useState(false);
	const ReCaptchaKey = "6LfQpdgaAAAAAN4G1jRkgraMcjtdYTE3FEfJvu4h";

	useEffect(() => {
		const check = /^[6-9]\d{9}$/;
		if (Phonenumber.match(check)) {
            console.log("valid phone number");
            setValidPhoneNumber(true);
			// valid phone number
		} else {
            console.log("invalid validPhoneNumber");
            setValidPhoneNumber(false);
			//invalid phonenumber
		}
	}, [Phonenumber]);

	const Submitted = (e) => {
		e.preventDefault();
		if (Password.length < 6) return alert("Password can't be less the 6 digit");
		if (validateRecaptcha) {
			console.log("Recaptcha is true");
		} else {
			console.log("Recaptcha is false");
		}
		// all the logic and all the process to login if the recapcha is true
	};

	const verificationFromRecaptcha = (response) => {
		console.log("verification of recaptcha loaded ",response);
        if(response) return setValidateRecaptcha(true);
        else return setValidateRecaptcha(false);
	};

	return (
		<div id="Login">
            <div id="Topbar">
                <img id="TopbarLogo" src={Logo} alt="Webizy" />
            </div>
            <h3 id="LoginHeading">Login</h3>
			<div id="LoginFormBox">
				<form id="LoginForm" onSubmit={Submitted}>
					<label className="InputLabel" htmlFor="PhoneNumber">Phone Number</label>
					<input
						type="tel"
						value={Phonenumber}
						onChange={(e) => setPhonenumber(e.target.value)}
						name="phoneNumber"
						className="InputForm"
                        placeholder="Phone number....."
					/>
					<label className="InputLabel" htmlFor="Password">Password</label>
					<input
						type="password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className="InputForm"
                        placeholder="Password..."
					/>
					{validPhoneNumber && validateRecaptcha ? (
						<button id="LoginFormSubmit" type="submit" style={{color: "white", backgroundColor: "blue"}}>
							Submit
						</button>
					) : (
						<button id="LoginFormSubmit" type="submit" style={{"color": "lightgray", "backgroundColor": "dodgerblue"}} disabled>
							Submit
						</button>
					)}
				</form>
				<Recaptcha
					sitekey={ReCaptchaKey}
					render="explicit"
					verifyCallback={verificationFromRecaptcha}
					//key for reccapcha
					onloadCallback={() =>
						console.log("hello there recaptcha box loaded sucessfully")
					}
                    expiredCallback={verificationFromRecaptcha}
				/>
			</div>
		</div>
	);
}

export default LoginPage;
