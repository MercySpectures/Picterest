import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";

const App = () => {

  const[data, setData] = useState([
    {
      download_url: "https://images.unsplash.com/photo-1535013113415-b315146c67d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D",
      author: "Mercy Spectures"
    },
    {
      download_url: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljfGVufDB8fDB8fHww",
      author: "Mercy Spectures"
    },
    {
      download_url: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D",
      author: "Mercy Spectures"
    },
    {
      download_url: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D",
      author: "Mercy Spectures"
    }
  ]);

    const getData = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        try {
            const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
            console.log(response.data); // Log the data
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error); // Log any errors
        }
    }

  return (
    <>
      <Header/>

      <div className="imageContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>If your pictures aren’t good enough, you’re not close enough.</p>
          {/* <input placeholder='Search'/> */}
          <button onClick={getData}>Go</button>
        </form>
        <div className="boxContainer">
        {data.map((d,idx) => {
            return (
                <div className="box" key={idx}>
                <img src={d.download_url} alt="image"/>
                    <div className="caption">{d.author} </div>
                </div>
            )
        })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
