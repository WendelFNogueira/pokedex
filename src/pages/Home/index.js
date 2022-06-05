import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Wrapper, Button, Title } from './styles';

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);
  return (
    <Wrapper>
      <Title>Bem vindo: {userLogado.displayName}</Title>
      <Button onClick={() => signOut()}>sair</Button>
    </Wrapper>
  );
};
