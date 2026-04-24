import Image from "next/image";

export default function ProjectImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
      />
    </div>
  );
}
