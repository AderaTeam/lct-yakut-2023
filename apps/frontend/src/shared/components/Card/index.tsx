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
  bg?: string;
}

export const Card = ({
  p = "32px",
  spasing = 16,
  children,
  w,
  h,
  mt,
  mb,
  bg = "#FFFF",
}: Props) => {
  return (
    <Stack
      mt={mt}
      mb={mb}
      p={p}
      gap={spasing}
      bg={bg}
      w={w}
      h={h}
      className={style.card}
    >
      {children}
    </Stack>
  );
};
