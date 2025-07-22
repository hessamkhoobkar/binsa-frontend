export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen gap-4 p-8 md:grid-cols-2">
      <section className="col-span-1 flex items-center justify-center">
        {children}
      </section>
      <section className="bg-base-200 col-span-1 hidden items-center justify-center rounded-2xl p-4 md:flex">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Side Pane</h2>
          <p>This area can contain promotional content or images.</p>
        </div>
      </section>
    </div>
  );
}
