import { Flex, Image, Stack, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "shared/components/Button";
import { Card } from "shared/components/Card";
import { LoadingOverlay } from "shared/components/LoadingOverlay";
import { ISocial } from "shared/models/ISocial";

interface SocialCardProps {
  social: ISocial;
}

export const SocialCard = ({ social }: SocialCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Card>
      <LoadingOverlay isLoading={isLoading} />
      <Flex align={"center"} gap={16}>
        <Image src={social.image} w={64} h={64} />
        <Stack gap={12}>
          <h3 className="h3">{social.name}</h3>
          <p style={{ color: "#212529" }} className="text">
            {social.description}
          </p>
        </Stack>
        <div style={{ marginLeft: "auto" }}>
          <Button
            onClick={() => setIsLoading(!isLoading)}
            disabled={social.status === "soon" ? true : false}
            outline
          >
            {social.status === "connected" ? (
              "Узнать  результат"
            ) : (
              <Flex gap={8}>
                Подключить <IconArrowUpRight stroke={1.5} color="#ADB5BD" />
              </Flex>
            )}
          </Button>
        </div>
      </Flex>
    </Card>
  );
};
