import ShopCard from "../shopcard/ShopCard";
import "./CardsView.css";

function CardsView({cards}) {

  return (
    <div className="cardsview">
      {cards.map((card) => 
        <ShopCard name={card.name} price={card.price} color={card.color} img={card.img} buttontext="ADD TO CART"></ShopCard>  
      )}  
    </div>
  )
}

export default CardsView