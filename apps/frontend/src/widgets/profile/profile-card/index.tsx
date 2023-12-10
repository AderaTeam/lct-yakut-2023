import { Avatar, Card, Flex, Stack, Image, Text } from "@mantine/core";
import { Button } from "shared/components/Buttons";
import { IconPencil, IconSettings } from "@tabler/icons-react";
import { Tag } from "shared/components/Tag";

import profileBg from "shared/assets/profile-bg.png";
import rank from "shared/assets/rank.svg";
import avatar from "shared/assets/avatar.png";

import style from "./ProfileCard.module.scss";
import { useContext } from "react";
import { Context } from "main";

export const ProfileCard = () => {
  const { UStore } = useContext(Context);

  return (
    <Card radius={32}>
      <Card.Section
        h={129}
        style={{
          backgroundImage: `url(${profileBg})`,
        }}
      />
      <Card.Section p={32}>
        <Stack gap={24}>
          <Flex justify={"space-between"}>
            <Avatar
              className={style.avatar}
              size={194}
              radius={32}
              mt={-97 - 32}
              src={avatar}
            />
            <Flex gap={8}>
              <Button outline>
                <Flex gap={8}>
                  Настройки <IconSettings color="#ADB5BD" stroke={1.5} />
                </Flex>
              </Button>
              <Button outline>
                <Flex gap={8}>
                  Редактировать <IconPencil color="#ADB5BD" stroke={1.5} />
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <Stack gap={6}>
            <Flex align={"center"} gap={12}>
              <Text className={style.name}>{UStore.user.username}</Text>
              <Tag variant="light">Топ {UStore.user.rating}</Tag>
            </Flex>
            <Flex align={"center"} gap={8}>
              <Text className={style.rank}>{UStore.user.rank}</Text>
              <Image h={24} w={24} src={rank} />
            </Flex>
          </Stack>
          <Flex gap={8}>
            {UStore.user.path.map((item) => (
              <Tag key={item.id} variant="outline">
                {item.name}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </Card.Section>
    </Card>
  );
};
