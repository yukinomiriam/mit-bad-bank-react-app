import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="right">
        <Card
          className="card mb-3"
          txtcolor="black"
          header="BadBank"
          title="Welcome to BadBank"
          text="For all your banking needs."
          body={
            <img src="bank-logo-black.png" className="img-fluid" alt="Logo" />
          }
        />
      </div>
    </div>
  );
}

export default Home;
