import appLogo from "../assets/app-logo.png";
import UserMenu from "./UserMenu";

export default function AppBar() {
  return (
    <header>
      <img src={appLogo} alt="" width="80" height="80" />
      <UserMenu />
    </header>
  );
}
