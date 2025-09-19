const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12">
      {children}
    </div>
  );
};

export default Container;