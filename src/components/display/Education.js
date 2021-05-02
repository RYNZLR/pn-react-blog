import React from "react"
import { Chrono } from "react-chrono";

export default function Timeline(){
  const items = [
    {
        title: "2018 - nu",
        cardTitle: "Professionele Bachelor Toegepaste informatica - Software Engineering",
        cardSubtitle:"Howest (Brugge)",
      },
    {
    title: "2012 - 2018",
    cardTitle: "Accountancy & IT",
    cardSubtitle:"Handelsinstituut Regina Pacis (Tielt)",
  }

]

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Chrono 
      theme={{
            primary: "white", 
            secondary: "#14C7FF", 
            cardBgColor: "#141414", 
            cardForeColor: "#14C7FF",
            cardTitle: "#141414" }}
      items={items}  
      mode="VERTICAL"
      hideControls="0"
      scrollable="false"
       />
    </div>
  )
}