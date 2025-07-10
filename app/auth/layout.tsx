export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 p-8 min-h-screen">
      <section className="col-span-1">{children}</section>
      <section className="col-span-1 bg-base-200 rounded-2xl p-4">
        Side Pane
      </section>
    </div>
  );
}
