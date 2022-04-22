import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const EasterEgg = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O6JXKMxRgQ8?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Button
            className="buttonStyle"
            variant="secondary"
            size="sm"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </header>
    </div>
  );
};

export default EasterEgg;
