import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultProps {
 results: Array<{
  id: number,
  price: number,
  title: string,
 }>
}

export function SearchResults({ results }: SearchResultProps) {
 const totalPrice = useMemo(() => {
  return results.reduce((total, product) => {
   return total + product.price
  }, 0)
 }, [])
 return (
  <div>
   <h2>{totalPrice}</h2>
   {results.map(products => {
    return (
     <ProductItem product={products} />
    )
   })}
  </div>
 )
}