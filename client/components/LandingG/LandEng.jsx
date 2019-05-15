import React, { Component } from "react";

class LandEng extends Component {
  handleclick=()=>{
    window.location = `/#/explore`; 
    }

  render() {
    return (
      <div >
      
      <div className="landingtext">
      <div className="title">Te Kaupapa Rāhuiatia maps Māori knowledge and customs of kaitiakitanga of whenua (the land), moana (the sea) and tangata (the people) </div>
            A Rāhui is a ritual prohibition that is used to restrict the use of natural resources for a period of time. It is also imposed in the case of a Tangi. Death pollutes land, water and people through Tapu. When Tapu has been breached, Rāhui is then put in place so balance can be restored and returned to a state of Noa. A Rāhui may be placed on forests, food gathering areas, rivers, lakes or the sea, and may be placed for a variety of reasons such as claiming ownership, respecting the site of a recent death, the need to replenish food stocks or resources in an area, or to prevent the risk or spread of disease. The power of a Rāhui comes from the Mana of the person or group that impose it. For that reason, Rāhui can only exist under the mantle of the Mana Whenua.
          
      
        <br></br>
        
          <button onClick={this.handleclick}>Explore Map</button>
          <br></br>

        </div>
      </div>
    )
  }
}

export default LandEng