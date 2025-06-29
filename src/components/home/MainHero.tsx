import LeftNavMenu from "./LeftNavMenu";
import RightPromoBanner from "./RightPromoBanner";

export default function MainHero() {
  return (
    <section className="container mx-auto mt-8 flex gap-6 bg-white">
      <LeftNavMenu />
      <RightPromoBanner />
    </section>
  );
}
