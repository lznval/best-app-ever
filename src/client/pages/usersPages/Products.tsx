import PageHead from '@components/PageHead'
import { Products } from '@components/Products'

export const ProductsPage = () => {
  return (
    <>
      <PageHead title='Лучшие товары' />
      <Products />
    </>
  )
}
