import dynamic from 'next/dynamic';
import { memo, useState } from 'react'
import { AddProductWishlistProps } from './AddProductToWishlist';
// import { AddProductWishlist } from './AddProductToWishlist';

const AddProductWishlist = dynamic<AddProductWishlistProps>(() => {
 return import ('./AddProductToWishlist').then(mod => mod.AddProductWishlist)
}, {
 loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
 product: {
  id: number,
  price: number,
  priceFormatted: string,
  title: string,
 }
 onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
 const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

 return (
  <div>
   {product.title} - <strong>{product.priceFormatted}</strong>
   <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

   {isAddingToWishlist && (
    <AddProductWishlist
     onAddToWishlist={() => onAddToWishlist(product.id)}
     onRequestClose={() => setIsAddingToWishlist(false)}
    />
   )}
  </div>
 )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
 return Object.is(prevProps.product, nextProps.product)
})