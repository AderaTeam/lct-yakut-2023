import { Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";

export const Routing = observer(() => {
  const location = useLocation();

  return (
    <Flex className="wrapper" style={{ height: "100vh" }}>
      <Flex>
        <Stack gap={40}>
          <Routes>
            <Route path="/" element={<div>123</div>} />
            <Route path="*" element={<div>121233</div>} />
          </Routes>
        </Stack>
      </Flex>
    </Flex>
  );
});
