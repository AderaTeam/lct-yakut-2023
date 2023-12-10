import { Stack } from "@mantine/core";
import MainWrapper from "shared/components/Wrappers/MainWrapper";
import { ProfileAchievement } from "widgets/profile-achievement";
import { ProfileCard } from "widgets/profile-card";

const ProfilePage = () => {
  return (
    <MainWrapper>
      <Stack gap={8}>
        <ProfileCard />
        <ProfileAchievement />
      </Stack>

      <></>
    </MainWrapper>
  );
};

export default ProfilePage;
