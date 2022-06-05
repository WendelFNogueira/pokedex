import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Wrapper, Button, Title } from './styles';

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  const handleLoginFromGoogle = async () => {
    await signInGoogle();
  }
  if (!signed) {
    return (
      <Wrapper>
        <Button onClick={handleLoginFromGoogle}>Logar com o Google</Button>
      </Wrapper>
    );
  };

  return <Navigate to="/Home" />;
};
