import { Flex, Stack } from "@mantine/core";
import TitleWrapper from "../TitleWrapper";
import { AnalyseCard } from "./components/profile-analyse-card";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "main";

type Props = {
  children?: React.ReactNode[];
  CustomTitle?: () => JSX.Element;
  title?: string;
  fullWidth?: boolean;
  isHideTitle?: boolean;
};

const MainWrapper = observer(
  ({ children, CustomTitle, title, fullWidth, isHideTitle }: Props) => {
    const { UStore } = useContext(Context);

    return (
      <Stack p={"32px 40px"} gap={48}>
        {CustomTitle ? (
          <CustomTitle />
        ) : (
          !isHideTitle && <TitleWrapper title={title} />
        )}
        <Flex justify="space-between" gap={16}>
          {!fullWidth ? (
            <>
              <Stack w={1019}>{children ? children[0] : <></>}</Stack>
              <Stack w={497}>
                {children ? (
                  <Stack gap={24}>
                    {!UStore.user.isAnalyzed && <AnalyseCard />}
                    {children[1]}
                  </Stack>
                ) : (
                  <></>
                )}
              </Stack>
            </>
          ) : (
            <Stack gap={0}>{children ? children[0] : <></>}</Stack>
          )}
        </Flex>
      </Stack>
    );
  },
);

export default MainWrapper;
