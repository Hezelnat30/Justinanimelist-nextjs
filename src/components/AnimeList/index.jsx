import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ data }) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-12">
      {data?.map(({ mal_id, images, title, synopsis }) => (
        <div
          key={mal_id}
          className="group relative items-center rounded-xl justify-center overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-color-accent/30 text-color-secondary hover:text-color-accent transition-all"
        >
          <Link href={`/anime/${mal_id}`}>
            <Image
              src={images.webp.image_url}
              alt={title}
              width={350}
              height={500}
              className="w-full h-full object-fill group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 group-hover:from-slate-950/70 group-hover:via-slate-900/60 group-hover:to-slate-950/70  "></div>
            <div className="absolute inset-0 flex flex-col gap-8 hover:gap-1 items-center justify-center text-start px-5 translate-y-[55%] group-hover:translate-y-0 transition-all">
              <h3 className="text-base line-clamp-2 sm:text-xl md:text-2xl font-bold self-start uppercase">
                {title}
              </h3>
              <p className="line-clamp-3 text-base opacity-0 group-hover:opacity-100 duration-150">
                {synopsis}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
