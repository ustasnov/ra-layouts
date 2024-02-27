import "./ShopCard.css";

function ShopCard(props) {
  const {name, price, color, img, buttontext} = props;

  return (
    <div className="shopcard">
      <div className="product-name">{name}</div>
      <div className="product-color">{color}</div>
      <figure className="product-figure">
        <img className="product-img" src={img} alt={name}></img>
      </figure>
      <div className="product-bottom">
        <div className="product-price">{"$" + price}</div>
        <button className="product-add">{buttontext}</button>
      </div>  
    </div>
  )
}

export default ShopCard
