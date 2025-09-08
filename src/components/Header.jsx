import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;