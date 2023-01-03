import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultProps {
 totalPrice: number;
 results: Array<{
  id: number,
  price: number,
  priceFormatted: string,
  title: string,
 }>

 onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultProps) {

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