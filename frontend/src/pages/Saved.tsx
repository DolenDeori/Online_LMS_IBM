const Saved = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section
      className={`${
        darkMode ? "text-gray-200 bg-gray-950" : "text-gray-600 bg-white"
      } h-svh flex justify-center items-center font-funnel duration-200`}
    >
      <p>Your Saved Books Will Appear Here</p>
    </section>
  );
};

export default Saved;
