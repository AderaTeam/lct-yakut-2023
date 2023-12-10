import { Stack } from "@mantine/core";
import MainWrapper from "shared/components/Wrappers/MainWrapper";
import { ProfileAchievement } from "widgets/profile/profile-achievement";
import { ProfileAnalyseCard } from "widgets/profile/profile-analyse-card";
import { ProfileCard } from "widgets/profile/profile-card";

const ProfilePage = () => {
  return (
    <MainWrapper isHideTitle>
      <Stack gap={12}>
        <ProfileCard />
        <ProfileAchievement />
      </Stack>
      <Stack gap={24}>
        <ProfileAnalyseCard />
      </Stack>
    </MainWrapper>
  );
};

export default ProfilePage;
