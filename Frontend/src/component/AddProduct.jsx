import { useState } from "react";
import ProductService from "../service/ProductService";

const AddProduct = () => {
  // product name
  // description
  // price
  // status

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  const ProductRegister = async (e) => {
    e.preventDefault();
    // console.log(product);

    try {
      await ProductService.saveProduct(product);
      console.log("Product Added Successfully");
      setMsg("Product Added Successfully");
      setProduct({
        productName: "",
        description: "",
        price: "",
        status: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              
              <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      value={product.productName}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      value={product.description}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      value={product.status}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
