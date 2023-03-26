import { useNavigate } from "react-router-dom";
import { Buttons } from "../../modules/components/Button/button";
import { Container } from "./style";

export function RedirectReadContent () {
  const router = useNavigate()

  return (
    <Container>
      <h3>Clique aqui ver o conteúdo!</h3>

      <Buttons
        text="Ler Conteúdo"
        color="red"
        size="large"
        onClick={() => router("/read-content")}
      />
    </Container>
  )
}