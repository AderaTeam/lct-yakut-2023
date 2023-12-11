import { Flex, Text } from "@mantine/core";
import { IPath } from "shared/models/IPath";

interface PathInfoProps {
  activePath: IPath | undefined;
}

export const PathInfo = ({ activePath }: PathInfoProps) => {
  const stepsCount = {
    complete: activePath?.steps.filter((item) => item.status === "Завершено")
      .length,
    left: activePath?.steps.filter((item) => item.status !== "Завершено")
      .length,
  };

  return (
    <Flex gap={24}>
      <p className="text">
        Пройдено:{" "}
        <span className="text bold">
          {stepsCount.complete}{" "}
          {stepsCount?.complete! === 1
            ? "шаг"
            : stepsCount?.complete! <= 4
            ? "шага"
            : "шагов"}
        </span>
      </p>
      <p className="text">
        Осталось:{" "}
        <span className="text bold">
          {stepsCount.left}{" "}
          {stepsCount?.left! === 1
            ? "шаг"
            : stepsCount?.left! <= 4
            ? "шага"
            : "шагов"}
        </span>
      </p>
    </Flex>
  );
};
