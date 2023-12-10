import { Button as MantineButton } from "@mantine/core";
import style from "./Button.module.scss";

interface Props {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  outline?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  title,
  onClick,
  color = "myColor.4",
  disabled,
  children,
  outline,
  fullWidth,
}: Props) => {
  return (
    <MantineButton
      disabled={disabled}
      color={color}
      style={
        outline
          ? {
              background: "transparent",
              border: "1px solid #DEE2E6",
              color: "#212529",
            }
          : { background: color }
      }
      onClick={onClick}
      p={"16px 32px"}
      className={!fullWidth ? style.button : style["button-full-width"]}
    >
      {children ? children : title}
    </MantineButton>
  );
};
