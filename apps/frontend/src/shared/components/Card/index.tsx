import { Stack } from "@mantine/core";
import style from "./Card.module.scss";

interface Props {
  p?: string;
  spasing?: number;
  children?: React.ReactNode;
  w?: number | string;
  h?: number | string;
  mt?: number;
  mb?: number;
}

export const Card = ({
  p = "32px",
  spasing = 16,
  children,
  w,
  h,
  mt,
  mb,
}: Props) => {
  return (
    <Stack
      mt={mt}
      mb={mb}
      p={p}
      gap={spasing}
      bg={"#FFFF"}
      w={w}
      h={h}
      className={style.card}
    >
      {children}
    </Stack>
  );
};
