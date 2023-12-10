import { Flex } from "@mantine/core";
import { Chip } from "shared/components/Chip";
import { IPath } from "shared/models/IPath";

interface ActivePathSwitchProps {
  path: IPath[];
  setActivePath: React.Dispatch<React.SetStateAction<number>>;
  activePath: number;
}

export const ActivePathSwitch = ({
  path,
  activePath,
  setActivePath,
}: ActivePathSwitchProps) => {
  return (
    <Flex gap={12}>
      {path.map((item) => (
        <Chip
          aciveId={activePath}
          id={item.id}
          onClick={() => setActivePath(item.id)}
          key={item.id}
          text={item.name}
        />
      ))}
    </Flex>
  );
};
