import { useAuth0 } from "@auth0/auth0-react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className="container d-flex justify-content-center mt-4">
          <h3>Hello {user.name} Login Successful</h3>
        </div>
      )}
      
      {!isAuthenticated&&<Hero/>}
      
    </>
  );
}

export default App;
