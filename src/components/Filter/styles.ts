import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 2px solid ${theme.COLORS.PINK_200};
  `};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 80px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
 

  ${({ theme })=> css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.VIOLET_600};
  `};
`;

