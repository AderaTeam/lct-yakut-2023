import { Flex, Stack } from "@mantine/core";
import TitleWrapper from "../TitleWrapper";

type Props = {
  children?: React.ReactNode[];
  CustomTitle?: () => JSX.Element;
  title?: string;
  fullWidth?: boolean;
};

const MainWrapper = ({ children, CustomTitle, title, fullWidth }: Props) => {
  return (
    <Stack p={"32px 40px"} gap={32}>
      {CustomTitle ? <CustomTitle /> : <TitleWrapper title={title} />}
      <Flex justify="space-between" gap={16}>
        {!fullWidth ? (
          <>
            <Stack w={1019}>{children ? children[0] : <></>}</Stack>
            <Stack w={497}>{children ? children[1] : <></>}</Stack>
          </>
        ) : (
          <Stack gap={0}>{children ? children[0] : <></>}</Stack>
        )}
      </Flex>
    </Stack>
  );
};

export default MainWrapper;
