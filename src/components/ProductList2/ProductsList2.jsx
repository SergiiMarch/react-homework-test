const ProductList2 = props => {
  return props.products.map(product => (
    <div key={product.id} className="card" style={{ width: '18rem' }}>
      <img src={product.images} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <a href="_" className="btn btn-primary">
          {product.price} $
        </a>
      </div>
    </div>
  ));
};

export default ProductList2;
