import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DisplayStoresPage() {
  const [stores, setStores] = useState([]);

  const [error, setError] = useState("");

  const url = "https://cs6310-14.azurewebsites.net/store/display_stores";

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url)
        .then((response) => {
          setStores(response.data);
        })
        .catch((error) => setError(error));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {stores.length > 0 ? (
            <Table bordered style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Store Revenue</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((store) => {
                  return (
                    <tr>
                      <td style={{ color: "white" }}>{store.name} </td>
                      <td style={{ color: "white" }}>{store.totalRevenue}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p>{error}</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/StoresPage">
            <Button className="buttonStyle" variant="secondary" size="sm">
              Go Back
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default DisplayStoresPage;
