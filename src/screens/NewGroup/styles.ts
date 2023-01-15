import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.VIOLET_700
}))`
align-self: center;
`;


