import Header from "../components/Header";

const BasePage = ({ title = "Welcome to the our website.", children }) => {
  return (
    <div className="contqiner-fluid">
      <Header />
      {children}
    </div>
  );
};

export default BasePage;
