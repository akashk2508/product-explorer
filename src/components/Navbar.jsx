const Navbar = ({ search, setSearch }) => {
  return (
    <div className="navbar">
      <h2>Product Explorer</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Navbar;