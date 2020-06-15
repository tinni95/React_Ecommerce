import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignContainer } from "./signin-and-signup.style";

const SignInAndSignUp = () => (
  <SignContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SignContainer>
);

export default SignInAndSignUp;
