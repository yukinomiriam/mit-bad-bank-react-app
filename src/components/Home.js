import Card from './Card'
function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="For all your banking needs."
      body={(<img src="bank-logo-black.png" className="img-fluid" alt="Logo"/>)}
    />    
  );  
}

export default Home;