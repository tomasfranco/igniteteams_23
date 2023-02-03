import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
  const navigation = useNavigation();
  
  function handleNew() {
    navigation.navigate('players', { group: 'Roupas'})
  }

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
        onPress={handleNew}
      />

    </Content>


    </Container>
  );
}