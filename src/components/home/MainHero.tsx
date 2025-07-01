import ResponsiveSection from "../shared/ResponsiveSection";
import LeftNavMenu from "./LeftNavMenu";
import RightPromoBanner from "./RightPromoBanner";

export default function MainHero() {
  return (
    <ResponsiveSection>
      <LeftNavMenu />
      <RightPromoBanner />
    </ResponsiveSection>
  );
}
