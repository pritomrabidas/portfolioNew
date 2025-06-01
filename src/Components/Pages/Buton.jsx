const Buton = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-primary text-secandari hover:bg-primary transition text-sm font-normal font-Nunito-font ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Buton;