import ProductItem from "./ProductItem";
import sty from './../components/HeaderComponent/styles.module.scss'
export default function ContainerBox() {

  return (
    <div  className='grid  sm1:grid-cols-1 md1:grid-cols-2 lg1:grid-cols-3  xl1:grid-cols-4 xl2:grid-cols-5 xl3:grid-cols-5'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      
      {/* <ProductItem />
      <ProductItem />
      <ProductItem /> */}
      
    </div>
  )
}
