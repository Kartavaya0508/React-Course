import "./App.css";
import Hobby from "./Hobby"

const app = () => {
  return (<>
    <body>
<div class="container">
    <h1>User Profile</h1>
    <div class="profile">
        <img src="./Photo.jpeg" alt="Profile Picture"></img>
        <h2>Kartavaya Jain</h2>
        <p>Age: 18</p>
        <p>Location: Haryana</p>
        <p>Address: Karnal, Haryana</p>
        <p>Contact: +91 95595 34955</p>
    </div>
    <Hobby/>
</div>
</body>
  </>  );
}
 
export default app;
