import ProductCard from '@src/components/ProductCard/ProductCard';
import useSearchProducts from '@src/hooks/useSearchProducts';
import { useProductsProvider } from '@src/providers/ProductsProvider/useProductsProvider'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';

export default function SearchResultPage() {

  const {searchValue} = useParams();
  const {searchProducts, searchLoading, searchedProducts}= useSearchProducts();

  useEffect(()=> {
    searchProducts(searchValue as string)
  }, [searchValue])

  console.log(searchedProducts)
  
  // const {searchedProducts} = useProductsProvider();
  const searchedProductCards = searchedProducts?.map(prod=> {
    return <ProductCard product={prod} />
  })

  return (
    <div className='custom-container pt-[30px] pb-[60px] min-h-[700px]'>
      <div className='mb-10'>
        <h4 className='firago-medium text-black-06 text-xs leading-[14px] mb-[15px] dark:text-white-400'><FormattedMessage id="search.result"/></h4>
        <h3 className='firago-medium text-base leading-[14px] dark:text-white-400'> მოიძებნა {searchedProducts?.length} შედეგი <span className=' text-orange-primary'>{searchValue}</span></h3>
      </div>
      {searchLoading && <div>Loading...</div>}
      {(!searchLoading && searchedProducts.length >= 1) && (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {searchedProductCards}
        </div>
      )}
      {(!searchLoading && searchedProducts.length < 1) && <div>Products could not be found</div>}
    </div>
  )
}
