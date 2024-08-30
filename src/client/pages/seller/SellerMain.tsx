import PageHead from '@components/PageHead'
import { SellerAdmin } from '@components/SellerAdmin'
import React from 'react'

export const SellerMainPage = () => {
  return (
    <>
      <PageHead title='Админская панель' />
      <div>Что-то типа сводной инфы</div>
      <SellerAdmin />
    </>
  )
}
