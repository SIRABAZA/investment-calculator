import headerImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImage} alt="Investment calculator header image" />
      <h1>Calculate your investments</h1>
    </header>
  );
}
