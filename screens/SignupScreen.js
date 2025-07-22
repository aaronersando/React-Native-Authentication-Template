import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, logout } from "../store/authSlice";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // const auth = useSelector((state) => state.authToken);
  const dispatch = useDispatch();

  async function handleSignup({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenticate(token));
    } catch (err) {
      Alert.alert(
        "Authentication Failed!",
        "Could not create user. Please check your credentials!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
