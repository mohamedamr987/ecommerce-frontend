import LeftNavMenu from "./LeftNavMenu";
import RightPromoBanner from "./RightPromoBanner";

export default function MainHero() {
  return (
    <section className="w-full px-4 lg:px-16 mt-8 flex flex-col lg:flex-row gap-6 bg-white">
      <LeftNavMenu />
      <RightPromoBanner />
    </section>
  );
}
