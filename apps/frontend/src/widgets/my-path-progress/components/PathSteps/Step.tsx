import { Flex, Stack } from "@mantine/core";
import { IPathStep } from "shared/models/IPath";

import { StepProgressBar } from "./StepProgressBar";
import { Card } from "shared/components/Card";
import { Tag } from "shared/components/Tag";
import { Button } from "shared/components/Button";
import { IconChevronRight } from "@tabler/icons-react";

export const Step = (step: IPathStep) => {
  return (
    <Flex h={"100%"} gap={16} align={"center"}>
      <StepProgressBar {...step} />
      <Card mb={8} mt={8} w={"100%"}>
        <Stack gap={24}>
          <Flex justify={"space-between"}>
            <Stack gap={8}>
              <h3
                className="h3"
                style={step.status === "Завершено" ? {} : { color: "#FA1D80" }}
              >
                Шаг {step.step}
              </h3>
              <h2 className="h2">{step.title}</h2>
            </Stack>
          </Flex>
          <Flex gap={8}>
            <Tag color={step.status === "Завершено" ? "gray.5" : "myColor"}>
              + {step.points} Б
            </Tag>
            <Tag color={step.status === "В процессе" ? "#27AE60" : "gray.5"}>
              {step.status}
            </Tag>
          </Flex>
          <Flex gap={12}>
            {step.tags.map((item) => (
              <p key={item} className="text bold" style={{ color: "#ADB5BD" }}>
                {item.toUpperCase()}
              </p>
            ))}
          </Flex>
          {step.status === "В процессе" && (
            <Button>
              <Flex gap={8}>
                Подтвердить <IconChevronRight stroke={1.5} color="#FFFF" />
              </Flex>
            </Button>
          )}
        </Stack>
      </Card>
    </Flex>
  );
};
