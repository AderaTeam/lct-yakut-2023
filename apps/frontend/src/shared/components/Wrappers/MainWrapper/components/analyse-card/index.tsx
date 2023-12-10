import { Avatar, Card, Flex, Stack, Text } from "@mantine/core";
import { Button } from "shared/components/Button";
import { IconChevronRight } from "@tabler/icons-react";

import mage from "shared/assets/analyse-mage.png";
import steam from "shared/assets/platforms/steam.svg";
import vk from "shared/assets/platforms/vk.svg";
import od from "shared/assets/platforms/od.svg";
import tg from "shared/assets/platforms/tg.svg";
import more from "shared/assets/platforms/more.svg";

import style from "./AnalyseCard.module.scss";

export const AnalyseCard = () => {
  const icons = [steam, vk, od, tg, more];

  return (
    <Card radius={32}>
      <Card.Section
        h={187}
        style={{
          backgroundImage: `url(${mage})`,
          backgroundPosition: "60% 20%",
        }}
      />
      <Card.Section p={32}>
        <Stack gap={24}>
          <Stack gap={10}>
            <Text className={style.title}>
              Проанализируем, кем <br /> ты можешь стать?
            </Text>
            <Text className={style.text}>
              Подключи соц. сети, чтобы Профилум смог помочь найти профессию
              твоей мечты
            </Text>
          </Stack>
          <Flex align={"center"} gap={16}>
            <Button outline>
              <Flex gap={8}>
                Анализировать
                <IconChevronRight stroke={1.5} color="#ADB5BD" />
              </Flex>
            </Button>
            <Flex align={"center"} gap={0}>
              {icons.map((icon, index) => (
                <Avatar
                  style={{ zIndex: icons.length - index }}
                  key={icon}
                  size={32}
                  className={style.icon}
                  src={icon}
                />
              ))}
            </Flex>
          </Flex>
        </Stack>
      </Card.Section>
    </Card>
  );
};
