import React from "react";
import "./App.css";
// import Cally from "./media/Cally.png";
// import Carol from "./media/Carol.png";
// import Emily from "./media/Emily.png";
import FamilyList from "./components/FamilyList";

const App = () => {
  //we dont need the commented out bits anymore now using redux
  //and it has now been changed to a function rather than class as it is stateless

  // state = {
  //   familyMembers: [
  //     { id: 1, name: "Cally", votes: 0, image: Cally },
  //     { id: 2, name: "Carol", votes: 0, image: Carol },
  //     { id: 3, name: "Emily", votes: 0, image: Emily },
  //   ],
  // };

  // upVote = (id) => {
  //   const familyMembers = this.state.familyMembers.filter((i) => i.id !== id);
  //   const member = JSON.parse(
  //     JSON.stringify(this.state.familyMembers.find((i) => i.id === id))
  //   );
  //   member.votes++;
  //   this.setState({
  //     familyMembers: [...familyMembers, member],
  //   });
  // };

  // downVote = (id) => {
  //   const familyMembers = this.state.familyMembers.filter((i) => i.id !== id);
  //   const member = JSON.parse(
  //     JSON.stringify(this.state.familyMembers.find((i) => i.id === id))
  //   );
  //   member.votes--;
  //   this.setState({
  //     familyMembers: [...familyMembers, member],
  //   });
  // };

  return (
    <div className="App">
      <h1>
        <u>Who's Best???</u>
      </h1>
      <FamilyList />
    </div>
  );
};

export default App;
