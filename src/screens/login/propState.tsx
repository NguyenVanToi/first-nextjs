import { RouteComponentProps } from "react-router";

export type LoginForm = {
  email: string;
  password: string;
};
export type SignUpForm = {};

export interface LoginSliceState {}

export interface IProps extends RouteComponentProps {}
