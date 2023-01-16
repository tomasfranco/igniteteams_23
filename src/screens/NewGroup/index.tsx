import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
  return (
    <Container>
      <Header showBackButton />      
    <Content>
      <Icon />

      <Highlight 
        title="Novas Turmas"
        subtitle="crie uma turma para adicionar os inscritos"
      />

    <Input
      placeholder="Nome da Turma"
    />

      <Button
        title="Criar"
        style={{ marginTop: 20 }}
      />

    </Content>


    </Container>
  );
}