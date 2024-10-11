import GameSidebars from "../navigation/layout/Sidebar";

export const metadata = {
  title: "SoulJade Naraka Bladepoint",
  descritpion: "SoulJade is an item like equipment for showdowns Game Mode",
};

const SouljadeLayout = ({ children }) => {
  return (
    <>
      <GameSidebars>{children}</GameSidebars>
    </>
  );
};

export default SouljadeLayout;
