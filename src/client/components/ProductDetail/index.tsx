import Loader from "@components/Loader";
import { ProductCard } from "@components/ProductCard";
import api from "client/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);
    api.get(`/products/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch(e => alert(e))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null;
  }
  return (
    <>
      <ProductCard product={data} />
    </>
  )
}
