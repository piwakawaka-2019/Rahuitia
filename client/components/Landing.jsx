import React, { Component } from "react";

class Landing extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: 'Farm aerials at sunrise_HD-web'
    }
  }

  render() {
    return (
    <div> 

      <div className="fullscreen-video-wrap">
        <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>

        

        <div className="overlay">
        <div>
          <h1>Respect the Rahui</h1> 
          <br></br>
          <h3>What does this app do?</h3>
          <br></br>
          <button>Explore Map</button>
        </div>
          <br></br>
        <div>
          <h1>What is a Rahui? Why is it important?</h1>   
          <p>
          Until recently, the prevailing view assumed lorem ipsum was born
          as a nonsense text. “It's not Latin, though it looks like it, and
          it actually says nothing,” Before & After magazine answered a
          curious reader, “Its ‘words’ loosely approximate the frequency
          with which letters occur in English, which is why at a glance it
          looks pretty real.
          </p>
        </div>
          <br></br>
        <div> 
          <h1>For Iwi</h1>

          <h3>Why register a rahui?</h3>
          <br></br>
          <p>
          Until recently, the prevailing view assumed lorem ipsum was born
          as a nonsense text. “It's not Latin, though it looks like it, and
          it actually says nothing,” Before & After magazine answered a
          curious reader, “Its ‘words’ loosely approximate the frequency
          with which letters occur in English, which is why at a glance it
          looks pretty real.
          </p>
          <button>Add a Rahui</button>
          <br></br>
          <footer>
          <br></br>
          <p>Contact:<a href="mailto:someone@example.com">someone@example.com</a></p>
          <p><a>Github</a> </p>
          </footer>
        </div>
</div>
       
        

        

      </div>
    );
  }
}


export default Landing;



