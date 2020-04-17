import React from "react";
import "./App.css";
import Cally from "./media/Cally.png";
import Carol from "./media/Carol.png";
import Emily from "./media/Emily.png";
import FamilyList from './components/FamilyList'

class App extends React.Component {
  state = {
    familyMembers: [
      { id: 1, name: "Cally", votes: 0, image: Cally },
      { id: 2, name: "Carol", votes: 0, image: Carol },
      { id: 3, name: "Emily", votes: 0, image: Emily },
    ],
  };

  upVote = (id) => {
    const familyMembers = this.state.familyMembers.filter((i) => i.id !== id);
    const member = JSON.parse(
      JSON.stringify(this.state.familyMembers.find((i) => i.id === id))
    );
    member.votes++;
    this.setState({
      familyMembers: [...familyMembers, member],
    });
  };

  downVote = (id) => {
    const familyMembers = this.state.familyMembers.filter((i) => i.id !== id);
    const member = JSON.parse(
      JSON.stringify(this.state.familyMembers.find((i) => i.id === id))
    );
    member.votes--;
    this.setState({
      familyMembers: [...familyMembers, member],
    });
  };

  render() {
    const { upVote, downVote } = this;
    const { familyMembers } = this.state;
    return (
      <div className="App">
        <h1><u>Who's Best???</u></h1>
        <FamilyList
          familyMembers={familyMembers}
          upVote={upVote}
          downVote={downVote}
        />
      </div>
    );
  }
}

export default App;
