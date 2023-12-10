import { IPath } from "shared/models/IPath";
import style from "./PathSteps.module.scss";
import { Stack } from "@mantine/core";
import { Step } from "./Step";

interface PathStepsProps {
  activePath: IPath | undefined;
}

export const PathSteps = ({ activePath }: PathStepsProps) => {
  return (
    <Stack gap={0}>
      {activePath?.steps?.length &&
        activePath.steps.map((step) => <Step key={step.step} {...step} />)}
    </Stack>
  );
};
