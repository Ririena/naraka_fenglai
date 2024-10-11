

import GameSidebars from "../navigation/layout/Sidebar";
export const metadata = {
  title: "Treasure List Naraka BladePoint",
  description: "Lorem Ipsum",
}
const LayoutTreasure = ({ children }) => {
  return (
    <>
      <GameSidebars>{children}</GameSidebars>
    </>
  );
};

export default LayoutTreasure;
