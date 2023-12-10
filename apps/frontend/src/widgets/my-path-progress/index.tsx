import { Context } from "main";

import { useState, useContext } from "react";
import { ActivePathSwitch } from "./components/ActivePathSwitch";

export const MyPathProgress = () => {
  const { UStore } = useContext(Context);
  const [activePath, setActivePath] = useState<number>(
    UStore?.user?.path.length && UStore.user.path[0].id,
  );

  return (
    <ActivePathSwitch
      path={UStore.user.path}
      activePath={activePath}
      setActivePath={setActivePath}
    />
  );
};
