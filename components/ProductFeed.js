// import Product from "./Product"
import SingleProduct from "./SingleProduct";
import Image from 'next/image';
import dynamic from "next/dynamic";
const Product = dynamic(
    () => import('./Product'),
    { ssr: false }
)

const ProductFeed = ({ products }) => {

    const length = products.length;

    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 mx-auto">
            {
                products.slice(0, 4).map((product, index) => <Product key={index} product={product} />)
            }
            <img
                className="md:col-span-full"
                src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
                {
                    products.slice(4, 5).map((product, index) => <Product key={index} product={product} />)
                }
            </div>
            {
                products.slice(5, products.length).map((product, index) => <Product key={index} product={product} />)
            }
        </div>


        // <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        //     {
        //         products.map((product) => <SingleProduct key={product.id} product={product} />)
        //     }

        //     {/* <img className="md:col-span-full"
        //         src="https://links.papareact.com/dyz" alt="" /> */}

        //     {/* <div className="md:col-span-2">
        //         {
        //             products.slice(4, 5).map((product) => <SingleProduct key={product.id} product={product} />)
        //         }
        //     </div> */}





        // </div>


    );
};

export default ProductFeed;