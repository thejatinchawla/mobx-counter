import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../Hooks/useStore";

export const GithubUserDetails = observer(() => {
  const {
    rootStore: { githubUserDetails },
  } = useStore();
  const [text, setText] = useState("");

  const onClickButton = () => {
    githubUserDetails.fetchGithubUserDetails(text);
  };
  return (
    <div className="border border-solid-2 p-5">
      <div>
        User Name: {githubUserDetails.getUserDetails?.name} <br />
        User Location: {githubUserDetails.getUserDetails?.location} <br />
      </div>
        <h1>Search Github User</h1>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter github user name" className="form-control" />
        <button onClick={onClickButton} className="btn btn-primary form-control">Search User</button>
    </div>
  );
});