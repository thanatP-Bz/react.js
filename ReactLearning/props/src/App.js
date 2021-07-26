import React from "react";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

function App() {
  const comments = [
    {
      name: "Sam",
      time: "12.00",
      text: "Nice post",
      avatar: faker.image.avatar(),
    },
    {
      name: "Iren",
      time: "7.00",
      text: "Great content",
      avatar: faker.image.avatar(),
    },
    {
      name: "Cali",
      time: "10.00",
      text: "Love it",
      avatar: faker.image.avatar(),
    },
  ];

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name={comments[0].name}
          time={comments[0].time}
          text={comments[0].text}
          avatar={comments[0].avatar}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name={comments[1].name}
          time={comments[1].time}
          text={comments[1].text}
          avatar={comments[1].avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name={comments[2].name}
          time={comments[2].time}
          text={comments[2].text}
          avatar={comments[2].avatar}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
