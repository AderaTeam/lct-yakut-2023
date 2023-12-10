import { Avatar, Card, Flex, Stack, Image, Text } from "@mantine/core";
import { Button } from "shared/components/Buttons";
import { IconPencil, IconSettings } from "@tabler/icons-react";
import { Tag } from "shared/components/Tag";

import profileBg from "shared/assets/profile-bg.png";
import rang from "shared/assets/rang.svg";
import avatar from "shared/assets/avatar.png";

import style from "./ProfileCard.module.scss";

export const ProfileCard = () => {
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
              <Text className={style.name}>Эмили Сторан</Text>
              <Tag variant="light">Топ 6</Tag>
            </Flex>
            <Flex align={"center"} gap={8}>
              <Text className={style.rang}>Маг - самоучка</Text>
              <Image h={24} w={24} src={rang} />
            </Flex>
          </Stack>
          <Flex gap={8}>
            <Tag variant="outline">#Frontend-разработчик</Tag>
            <Tag variant="outline">#Программная инженерия</Tag>
          </Flex>
        </Stack>
      </Card.Section>
    </Card>
  );
};
