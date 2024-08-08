import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <main className="flex-center min-h-screen w-full">{children}</main>;
};

export default AuthLayout;
