import { TouchableOpacityProps } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";

import { ButtonIconTypesStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypesStyleProps;
}

export function ButtonIcon({icon, type = "PRIMARY", ...rest }: Props){
  return(
    <Container> 
      <Icon 
        name={icon}
        type={type}
      />  
    </Container>
  );
}