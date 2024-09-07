import { useStateContext } from "../context/ContextProvider";

const Header = ({ category, title }: { category: string; title: string }) => {
  const { currentColor } = useStateContext();
  return (
    <div className="mb-10">
      <p className="font-semibold dark:text-gray-50 text-slate-800">
        {category}
      </p>
      <p
        className="text-xl font-extrabold tracking-tight opacity-80"
        style={{ color: currentColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
