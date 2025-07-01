type ResponsiveSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ResponsiveSection({
  children,
  className = "",
}: ResponsiveSectionProps) {
  return (
    <section
      className={`w-full px-4 lg:px-16 flex flex-col lg:flex-row gap-6 bg-white ${className}`}
    >
      {children}
    </section>
  );
}
