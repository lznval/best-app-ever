import { Button } from '@components/UI/Button';
import { state } from '@redux/store';
import { IOrder } from '@types';
import api from 'client/api';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const {
    cart: { items },
    auth: { data },
  } = useSelector(state);
  const [orders, setOrders] = useState<IOrder[] | null>(null);

  const totalAmount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);
  const handleCreateOrder = async () => {
    const order = {
      user: data?._id,
      products: items,
      totalAmount,
    };
    const res = await api.post('/orders', order);
    if (res.status === 200) {
      alert('Заказ создан!');
      handleGetOrders();
    }
  };

  const handleGetOrders = async () => {
    const res = await api.get('/orders');
    if (res.data.length > 0) {
      setOrders(res.data);
    }
  };

  useEffect(() => {
    handleGetOrders();
  }, []);

  return (
    <div>
      <h1>
        {items.length > 0
          ? `Количество товаров в вашей корзине: ${items.length}`
          : 'Ваша корзина пуста'}
      </h1>
      {items.map((item) => (
        <div key={item._id}>
          <p>
            {item.title} - {item.price}
          </p>
        </div>
      ))}
      <h1>Ваша финальная цена: {totalAmount} ₽</h1>
      <div className="flex">
        <Button onClick={handleCreateOrder} label="Оформить заказ" />
      </div>

      {orders && (
        <>
          <h1>Ваши предыдущие заказы</h1>
          <div className="flex gap-2">
            {orders &&
              orders.map((order) => (
                <div key={order._id}>
                  <div className="rounded border-2 border-sky-700 p-2">
                    {order.products.map((item) => (
                      <p key={item.product._id}>
                        {item.product.title} - {item.product.price} - {item.quantity}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
