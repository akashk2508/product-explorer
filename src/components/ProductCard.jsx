const ProductCard = ({ item }) => {
  return (
    <div className="card" key={item.id}>
  <img src={item.thumbnail} alt={item.title} />
  <h3>{item.title}</h3>
  <p>{item.description.slice(0, 50)}...</p>
  <p className="price">${item.price}</p>
</div>
  );
};

export default ProductCard;