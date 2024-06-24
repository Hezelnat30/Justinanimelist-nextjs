import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-color-accent-100 uppercase">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="sm:text-lg md:text-xl text-base underline text-color-secondary hover:text-color-accent-100 transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
