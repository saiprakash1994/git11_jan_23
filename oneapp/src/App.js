
import "./App.css";
import ReactPlayer from 'react-player'

function App() {
    const [url, setUrl] = useState()

  return (
    <div className="App">
       <h1>Rahul's First Remote app</h1>
      <h1>praneeth First Remote app</h1>
      <h1>sai Prakash First Remote app</h1>
      <h1>praneeth First Remote app</h1>
      <h1>sai Prakash First Remote app</h1>
      <h1>praneeth First Remote app</h1>
      <h1>brn</h1>
      <h1>Haneel Kumar Remote app</h1>
      <h1 >charan sai</h1>

      <div className="App">
    <h1>IPL Teams</h1>
    <div className="IPL">

<div>
  <img src=".\ipl Images\CSK.png"></img>
  <h3>Chennai Super Kings</h3>
</div>

<div>
  <img src=".\ipl Images\MI.png"></img>
  <h3>Mumbai Indians</h3>
</div>

<div>
  <img src=".\ipl Images\RCB.jpg"></img>
  <h3>Royal Challengers Banglore</h3>
</div>

<div>
  <img src=".\ipl Images\SRH.png"></img>
  <h3>Chennai Super Kings</h3>
</div>
    </div>
    </div>
    <input placeholder='url' onChange={(e:any)=>{setUrl(e.target.value)}}></input>
      <iframe src={url}></iframe>
      <ReactPlayer
        url={url}
        
  config={{
    youtube: {
      playerVars: {

        preload: "auto",

        autoplay: true,

    }
    },
    
  }}
/>
    </div>
  );
}

export default App;
