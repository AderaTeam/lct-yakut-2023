import { Loader, LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";

interface Props {
  isLoading?: boolean;
}

export const LoadingOverlay = ({ isLoading }: Props) => {
  return (
    <MantineLoadingOverlay
      visible={isLoading || false}
      loaderProps={<Loader color="grape.5" size={"xl"} />}
      overlayProps={{ blur: 0.6, color: "#373A40" }}
      style={{ borderRadius: "24px" }}
    />
  );
};
