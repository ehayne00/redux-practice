import React from "react";
import MemberCard from "../components/MemberCard";

const FamilyList = ({ familyMembers, upVote, downVote }) => {
  const sortedFamily = familyMembers.slice().sort((a, b) => b.votes - a.votes);
  return (
    <div className="flex">
        {sortedFamily.map((member) => 
      <MemberCard
        key={member.id}
        member={member}
        downVote={downVote}
        upVote={upVote}
      />)}
    </div>
  )
};

export default FamilyList;
