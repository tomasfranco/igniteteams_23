import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme}) => theme.COLORS.VIOLET_600};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.PINK_50};
      font-family: ${theme.FONT_FAMILY.REGULAR};  
    `}
  `;

  export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.PINK_50,
    weight: 'fill'
  }))`
    margin-right: 20px;
  `