import { useEffect, useState } from "react";
import Card from "./components/card/Card";
// uuid
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5 * 1000);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5">
      {loading &&
        Array(4)
          .fill(0)
          .map((item, index) => <Card.Loading key={index}></Card.Loading>)}
      {!loading &&
        Array(4)
          .fill(0)
          .map((item, index) => <Card key={index}></Card>)}
    </div>
  );
}

export default App;
