import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container } from  "./styles";

export function Groups(){
  return(
     <Container>
       <Header  />
       <Highlight 
        title="Treinamentos" 
        subtitle="Seja uma Diarista Profissional"
        />
        <GroupCard title="Passagem Roupas" />
        <GroupCard title="Limpeza" />
        <GroupCard title="Atendimento ao Cliente" />
        <GroupCard title="Marketing para Diaristas" />
    </Container>
  );
}
