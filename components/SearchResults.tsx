import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultProps {
 results: Array<{
  id: number,
  price: number,
  title: string,
 }>

 onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist }: SearchResultProps) {
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
     <ProductItem
      key={products.id}
      product={products}
      onAddToWishlist={onAddToWishlist}
     />
    )
   })}
  </div>
 )
}