import ResponsiveSection from "../shared/ResponsiveSection";
import Row from "../shared/Row";

type ReusableHomeSectionProps = {
  smallTitle: string;
  bigSubTitle: string;
};

export default function ReusableHomeSection({
  smallTitle,
  bigSubTitle,
}: ReusableHomeSectionProps) {
  return (
    <ResponsiveSection>
      <div>
        <Row className="gap-4 items-center">
          <div className="bg-[var(--color-primary)] w-[20px] h-[40px] rounded-[4px]"></div>
          <h1 className="text-base font-semibold text-[var(--color-primary)]">
            {smallTitle}
          </h1>
        </Row>

        <h1 className="text-2xl lg:text-4xl font-semibold mt-4">
          {bigSubTitle}
        </h1>
      </div>
    </ResponsiveSection>
  );
}
