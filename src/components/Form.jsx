import { useState } from "react";
import styles from "./form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faPersonWalking } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// prevents page refresh  & prevent data in state from being lost on click of submit button
	function handleSubmit(e) {
		e.preventDefault();
		console.log("form submitted:", { name, email, password });
	}

	return (
		<>
			<main>
				<form>
					{/* header */}
					<h1 className={styles.header}>Hello!</h1>
					<p>Please signup to continue</p>

					{/* name of user */}
					<h2>Full Name</h2>
					<label htmlFor="name"></label>
					<input
						id="name"
						type="text"
						placeholder="Funmi Lajoc"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>

					{/* user email */}
					<h2>Email Address</h2>
					<label htmlFor="email"></label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						id="email"
						placeholder="funmilajoc@gmail.com"
					/>
					{/* user password */}
					<h2>Password</h2>
					<label htmlFor="password"></label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
					<h2>Confirm Password</h2>
					<label htmlFor="password"></label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						name="password"
						id="confirm password"
						placeholder="Confirm Password"
					/>
					{/* user password end */}

					{/* submit btn */}
					<button className={styles.signupBtn} onClick={(e) => handleSubmit(e)}>
						Sign Up
					</button>

					<p>
						Im already a member! <a href="#">Sign In</a>
					</p>
				</form>

				{/* display for larger screen */}

				<section className={styles.heroPage}>
					{/* the two fontawesome icons wrapped in a container to make as one hero-logo*/}
					<div className={styles.icons}>
						<FontAwesomeIcon icon={faPersonWalking} />
						<FontAwesomeIcon
							className={styles.fawesomeSoccer}
							icon={faFutbol}
						/>
					</div>
					{/* icons end */}

					{/* herotext*/}
					<h1 className={styles.soccerBall}>Soccer Ball</h1>
					<p>Already have an account?</p>
					{/* hero text end*/}

					{/* CTA button */}
					<button className={styles.signinBtn}>Sign In</button>
				</section>
			</main>
			<footer>
				Copyright <a href="https://github.com/f-lajoc">@Funmi_Lajoc</a>
			</footer>
		</>
	);
}
