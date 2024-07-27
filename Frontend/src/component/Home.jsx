import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    ProductService.getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => {
        setMsg("Delete Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styles = {
    addProduct: {
      backgroundColor: "#F08080"
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header text-white fs-3 text-center" style={styles.addProduct}>
                All Product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr key={p.id}>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link
                            to={"/editProduct/" + p.id}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
