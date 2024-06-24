export default function HeaderMenu({ title }) {
  return (
    <div className="text-center py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-extrabold text-color-accent-100 uppercase">
        {title}
      </h1>
    </div>
  );
}
