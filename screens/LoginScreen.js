import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleLogin({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert(
        "Authentication Failed!",
        "Could not login user. Please check your credentials!"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
