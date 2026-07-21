import logo from "../../assets/profile/sc_logo.png";

const Header = () => {
  return (
    <header className="w-full border-b fixed left-0 top-0 z-50">
      <div className="w-full flex px-4 py-1">
        <h1 className="w-20 aspect-square flex items-center justify-center">
          <img className="w-[95%]" src={logo} alt="My Portfolio logo" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
