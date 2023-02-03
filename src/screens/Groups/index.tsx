import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from  "./styles";
import { useNavigation } from "@react-navigation/native";

export function Groups(){
  const [groups, setGroups] = useState<string[]>(['Passagem Roupas', 'Limpeza', 'Atendimento ao Cliente']);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return(
     <Container>
       <Header  />
       <Highlight 
        title="Treinamentos" 
        subtitle="Seja uma Diarista Profissional"
        />      

        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
          <GroupCard
           title={item}           
           />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty 
              message="Cadastre o primeiro treinamento!"
            />
          )}
          showsVerticalScrollIndicator={false}            
        />  
        <Button
          title="Criar novo treinamento"
          type="PRIMARY"
          onPress={handleNewGroup}
        />      
    </Container>
  );
}
