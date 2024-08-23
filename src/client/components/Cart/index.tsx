import { cartSelect } from "@redux/slices/cartSlice";
import { useSelector } from "react-redux"

export const Cart = () => {
  const { cart } = useSelector(cartSelect);
  console.log(cart);
  return (
    <div>
      <h1>{cart.items.length > 0 ? `Количество товаров в вашей корзине: ${cart.items.length}` : 'Ваша корзина пуста'}</h1>
    </div>
  )
}
