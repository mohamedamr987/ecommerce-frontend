export default function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}
