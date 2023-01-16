import { useState } from "react";

import { FlatList } from "react-native";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter"
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("Turma A");
  const [players, setPlayers] = useState([
    'Ingrid', 'Isabela', 'Joao', 'Sylvia', 'Ana Raquel', 'Afonso', 'Edelvira', 'Lourenço', 'Marília', 'Thayná']);  

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da Turma"
        subtitle="Adicione os inscritos e separe as turmas"
      />

    <Form>
      <Input 
        placeholder="Nome da pessoa"
        autoCorrect={false}
      />

      <ButtonIcon icon="add"  />      
      </Form>

<HeaderList>
    <FlatList
      data={['Turma A', 'Turma B']}
      keyExtractor={item => item}
      renderItem={({ item}) => (
        <Filter
         title={item} 
          isActive={item === team}
          onPress={() => setTeam(item)}
         />
         
      )}
      horizontal
    />
    <NumberOfPlayers>
      {players.length}
    </NumberOfPlayers>
  </HeaderList>

   <FlatList
    data={players}
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <PlayerCard      
        name={item}
        onRemove={() => {}}
      />
    )}
    ListEmptyComponent={() => (
      <ListEmpty
        message="Não há pessoas nessa Turma."
        />
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[{ paddingBottom: 100}, players.length === 0 && { flex: 1}]}
   />     
<Button
   title="Remover Turma"
   type="SECONDARY"
   />
</Container>
  );
}