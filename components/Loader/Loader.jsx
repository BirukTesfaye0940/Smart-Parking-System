// Loader.jsx
import './load.css'; // Assuming you define the styles in this CSS file

const Loader = () => {
  return (
    <div className="lds-roller">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
  );
};

export default Loader;
