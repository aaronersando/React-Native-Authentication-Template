import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleSignup({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (err) {
      Alert.alert(
        "Authentication Failed!",
        "Could not create user. Please check your credentials!"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
