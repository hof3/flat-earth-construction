import pete from './images/IMG_8028.jpg'
const Home = () => {
    return (  
        <div className="home">
            <div><h2>Peter Breslin Presents:</h2> <h3>"The Birth of Flat Earth Construction"</h3></div>
            <br/>
            <p>To start a new construction project, email Peter: <a href="mailto:pbrestech@gmail.com">pbrestech@gmail.com</a></p>   
            <br/>
            <img src={pete}></img>
        </div>
    );
}
 
export default Home;