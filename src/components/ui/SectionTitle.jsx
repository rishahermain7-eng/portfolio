function SectionTitle({ subtitle, title }) {
  return (
    <div className="mb-16 text-center">

      <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;