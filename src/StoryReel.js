import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://randomwordgenerator.com/img/picture-generator/57e6d2474b52aa14f1dc8460962e33791c3ad6e04e5077497c2a7cd49545c0_640.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/8.jpg"
        title="Sakata Gintoki"
      />
      <Story 
        image="https://randomwordgenerator.com/img/picture-generator/54e1d1444e52ac14f1dc8460962e33791c3ad6e04e50744172277ed0974ac3_640.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/46.jpg"
        title="Sakata Gintoki"
      />
      <Story 
        image="https://randomwordgenerator.com/img/picture-generator/55e8d4474c50a514f1dc8460962e33791c3ad6e04e507440762879dc9144c2_640.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/12.jpg"
        title="Sakata Gintoki"
      />
      <Story 
        image="https://randomwordgenerator.com/img/picture-generator/52e3dd40435bb10ff3d8992cc12c30771037dbf85254794e702672d69f4b_640.jpg"
        profileSrc="https://randomuser.me/api/portraits/women/2.jpg"
        title="Sakata Gintoki"
      />
      <Story 
        image="https://randomwordgenerator.com/img/picture-generator/52e8d6404857ab14f1dc8460962e33791c3ad6e04e507441722878dc9e4fcc_640.jpg"
        profileSrc="https://randomuser.me/api/portraits/women/32.jpg"
        title="Sakata Gintoki"
      />
    </div>

  )
}

export default StoryReel