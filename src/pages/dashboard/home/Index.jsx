// import Table from "../../../component/Table"
// import CategorySection from "./CategorySection"

import { useSelector } from "react-redux"

// import ProductSection from "./ProductSection"
{/* <CategorySection />
<ProductSection /> */}
{/* <Table/> */}


function Home() {

    const {categories} = useSelector((store) => store.categories);
    const {products} = useSelector((store) => store.products);

    console.log(categories, products);
    

    return (
        
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 border shadow-sm p-3 rounded">
                    <span>Total Categorys</span>
                    <h2 className="text-2xl font-semibold">${categories.length}</h2>
                </div>
                <div className="col-span-4 border shadow-sm p-3 rounded">
                    <span>Total Products</span>
                    <h2 className="text-2xl font-semibold">${products.length}</h2>
                </div>
                <div className="col-span-4 border shadow-sm p-3 rounded">
                    <span>Total Users</span>
                    <h2 className="text-2xl font-semibold">$1200</h2>
                </div>
            </div>
        
    )
}

export default Home