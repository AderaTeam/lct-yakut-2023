import { Avatar, Flex, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { PROFILE_ROUTE } from "shared/constants/const";

const NavbarUser = () => {
  return (
    <Flex gap={12} align={"center"}>
      <Avatar h={56} w={56} />
      <Stack gap={6}>
        <Text className={style["navbar__name"]}>Эмили Сторан</Text>
        <Text className={style["navbar__tag"]}>@adera</Text>
      </Stack>
      <div style={{ marginLeft: "auto" }}>
        <NavLink to={PROFILE_ROUTE}>
          <IconChevronRight stroke={1.5} color="#ADB5BD" />
        </NavLink>
      </div>
    </Flex>
  );
};

export default NavbarUser;
