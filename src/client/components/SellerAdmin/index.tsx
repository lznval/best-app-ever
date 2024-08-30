import { isSellerAuth } from '@redux/slices/sellerSlice';
import { useSelector } from 'react-redux'

export const SellerAdmin = () => {
  const auth = useSelector(isSellerAuth);

  return (
    <div>SellerAdmin</div>
  )
}
