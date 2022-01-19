import Connector from "../Connector/Connector";

const Header = (props) => {
  return (
    <header className="section has-text-centered">
      <h1 className="title">Speed Limit 🚦</h1>
      <h2 className="subtitle">
        How much have I payed in transaction fees this week?
      </h2>
      <Connector />
    </header>
  );
};

export default Header;
