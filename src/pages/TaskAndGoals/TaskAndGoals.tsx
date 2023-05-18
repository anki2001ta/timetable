import "./Task&Goal.scss";
import coin from "../../assets/coins.svg";
import moment from "moment";
import {useState} from 'react'
import Feedback from "./360FB";
import PersonalGoals from "./PersonalGoals";
const TaskAndGoals: React.FC = () => {
  const [toggle, setToggle]=useState(true)
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  let date = moment();

let currentDate = date.format('DD/MM/YYYY');
console.log(currentDate); 
  return (
    <div className="task_container">
      <p className="task_heading">Task & Goals</p>
      <div className="task_nav">
        <p  onClick={()=>{setToggle(true)}}>
        360* Feedback
        </p>
        <p onClick={()=>{setToggle(false)}}>
        Personal Goals
        </p>
      </div>
      <div className="task_coin">
        <p> To earn gold coin complete the Feedback task.</p>
        <button>
          <img src={coin} />
        </button>
      </div>
      <div>
{
  toggle ? <Feedback />: <PersonalGoals />
}
      </div>
    </div>
  );
};

export default TaskAndGoals;