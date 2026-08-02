function Button({
  children,
  variant = "primary",
  href,
  target = "_self",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-400 via-orange-500 to-pink-400 text-white shadow-lg hover:shadow-orange-300/50",

    secondary:
      "bg-white border-2 border-orange-300 text-slate-800 hover:bg-orange-50 hover:border-orange-400 shadow-md",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;