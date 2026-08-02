function Card({ children }) {
  return (
    <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
      {children}
    </div>
  );
}

export default Card;