import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
import { FcApproval } from "react-icons/fc";
import { useSelector, } from 'react-redux';
import { selectAllProducts } from './Redux/Product';



const ProductList = () => {



  const products = useSelector(selectAllProducts);



  const [searchTerm, setSearchTerm] = useState('');//search and category 
  const [selectedCategory, setSelectedCategory] = useState('');

  //it returns only those product who select and search basiss
  const filteredProducts = products.filter(product =>
    (!selectedCategory || product.category === selectedCategory) && // Filter by category if selected
    (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) // Filter by search term if entered
  );
  // console.log(filteredProducts)

  //get unique catgory

  // useEffect(() => {
  //   const uniqueCategories = [...new Set(products.map(product => product.category))];
  //   setSelectedCategory(uniqueCategories);
  // }, [products]);

  return (
    <div>
      <div className=' flex items-center justify-center gap-1'>
        <h1 className=' text-center p-4   font-extrabold font-mono text-4xl  text-balck   '>Our Products </h1>

        <div>
          <FcApproval size={40} />

        </div>

      </div>
      <div className=' text-center my-3 flex flex-col sm:flex-row items-center justify-center gap-5'>
        <input
          type="text"
          placeholder="Search products"
          className=' border  text-purple-800 border-yellow-400 px-8 rounded-3xl py-2'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}

        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className=' border bg-purple-300 border-yellow-400 px-6 py-3 rounded-3xl' >
          <option className=' bg-gray-300 ' value="">All Categories</option>
          <option className=' bg-gray-300 ' value="groceries">groceries 
          </option>
          <option className=' bg-gray-300 ' value="beauty">beauty </option>
          <option className=' bg-gray-300 ' value="fragrances">fragrances</option>
          <option className=' bg-gray-300 ' value="furniture">furniture</option>
         



        </select>
      </div>
      <div>
        {/* //hamne sirf filterd product send kiye hi fillterproducts send kiye .... */}
        <ProductCart product={filteredProducts} />





      </div>

    </div>
  )
}

export default ProductList
