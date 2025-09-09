import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import "./Products.css"

export default function Products() {
    const items = [
        {
            id: 1,
            name: "tree pot",
            src: "/images/product_one.webp",
            description: "original package design from house",
            abscontent: "new arrival",
            price: 25,
        },
        {
            id: 2,
            name: "fashion set",
            src: "/images/product_two.webp",
            description: "custome package",
            abscontent: "low cost",
            price: 35,
        },
        {
            id: 3,
            name: "juice drinks",
            src: "/images/product_three.webp",
            description: "nature made another world",
            abscontent: "high cost",
            price: 45,
        },
    ]

  return (
    <div className="container">
        <div className="row m-0 g-3">
            {
                items.map((product)=>(
                    <div key={product.id} className="col-lg-4 col-md-6 col-12 mx-auto">
                        <div className="card w-100 border-0">
                            <img src={product.src} alt="img" className="w-100 card-img-top" loading="lazy" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-capitalize fw-bolder fs-5">{product.name}</h5>
                                    <p className="fw-bolder fs-6 text-secondary">${product.price}</p>
                                </div>

                                <div>
                                    <p className="card-text text-secondary">{product.description}</p>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center show-new">
                                    <span className="bg-white text-capitalize p-2">{product.abscontent}</span>
                                    <button className="border-0 bg-transparent">
                                        <FaHeart className="fs-4 border-0 text-white heartmouse" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <p className="text-center my-5">
            <Link className="pb-2 border-bottom border-dark text-uppercase text-dark">view all products</Link>
        </p>
    </div>
  )
}
