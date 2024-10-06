import Hero from "./components/Hero"; //! ./ => Inside the same folder
import Services from "./components/Services";



function HomePage() {
  const name = "Manupa";

  return (
    <div>
           
      <Hero />
      
      <Services/>
      
    
    </div>
  );
}

export default HomePage;