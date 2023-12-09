import { Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { HOME_ROUTE, MY_PATH_ROUTE } from "shared/constants/const";
import { authRoutes } from "shared/constants/routes";

export const Routing = observer(() => {
  const location = useLocation();

  if (location.pathname === HOME_ROUTE) {
    return <Navigate to={MY_PATH_ROUTE} />;
  }

  const data = [
    { path: "/1", title: "1" },
    { path: "/1", title: "2" },
  ];

  return (
    <Flex className="wrapper" style={{ height: "100vh" }}>
      <Flex>
        <Stack gap={40}>
          <Routes>
            {authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Stack>
      </Flex>
    </Flex>
  );
});
