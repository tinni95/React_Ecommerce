import React from "react"

import "./signin-and-sign-up.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => (
    <div className="signin-and-signup">
    <SignIn></SignIn>
    <SignUp></SignUp>
    </div>
)

export default SignInAndSignUp;