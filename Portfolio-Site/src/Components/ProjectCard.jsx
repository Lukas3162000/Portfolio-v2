export default function ProjectCard({ index, hoveredIndex, setHoveredIndex, title, subline, image, link }) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  const cardWidthClass = isHovered
    ? "flex-[2]"
    : isOtherHovered
    ? "flex-[0.8]"
    : "flex-1";

  return (
    <a
      href={link}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative h-40 rounded-xl overflow-hidden transition-all transition-[flex] duration-200 ease-in-out ${cardWidthClass} basis-0 min-w-0`}

      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{subline}</p>
      </div>
    </a>
  );
}
