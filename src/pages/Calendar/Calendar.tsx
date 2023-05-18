import "./Calender.scss";
import clock from "../../assets/clock.svg";
import awaaj from "../../assets/awaj.svg";
import subject from "../../assets/book.svg";
import chapter from "../../assets/chapter.svg";
import pencil from '../../assets/pencil.svg'
import Test from '../../components/Calender'
import "../../pages/TaskAndGoals/Task&Goal.scss";
import Upload from "../../assets/Upload.svg";
import bin from "../../assets/collagebin.png";
import collagepic from "../../assets/collagepic.png"
import { Collapse, Space } from 'antd';

const { Panel } = Collapse;


const Calendar = () => {
  return (
    <div className="box">
      <div className="calender_section">


<Test />
	  </div>
      <div className="calender_cards">
        <h1>Today's Schedule</h1>
        <div className="cards">
          <p>9:00am - 9:40am</p>
          <div className="time">
            <img src={clock} alt="" />
            <div>Class Time</div>
          </div>
          <div className="class_sub">
            <div>
              <p>7th D</p>
              <div className="time">
                <img src={awaaj} />
                <div>Class & Section</div>
              </div>
            </div>
            <div>
              <p>Maths</p>
              <div className="time">
                <img src={subject} />
                <div>Subject</div>
              </div>
            </div>
          </div>
		  <div className="chapter">
			<img src={chapter} />
			<h5 className="chapter_name">Chapter: 5 More on Multiplication</h5>
		  </div>
		  <div className="edit">
               <button><img src={pencil } alt="" />Edit</button>
		  </div>
        </div>
      </div>
      <div   >
      <div className="wrapp_comp">
  <p className="para">Today’s Task</p>
  <Space direction="vertical">
    <Collapse collapsible="header" defaultActiveKey={['1']} size="large" ghost="false"
   expandIconPosition="end"
    className="collapse"
    >
      <Panel header="Uploading evidence of implementation of planner" key="1"
      className="panel">
        <div className="peer_sub2">
                    <h4>Deadline Date</h4>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <h4>Title of Evidence</h4>
                    <input type="text" placeholder="Enter Feedback" />
                  </div>

                  <div className="contex2">
                    <h4>Upload Evidence/Result</h4>
                    <div  className="mini_div2">
                      <div className="mini_div_Container2">
                        <div>
                          <img src={bin} alt="" />
                        </div>
                        <div>
                          <img src={collagepic}/>
                        </div>
                        <div>
                          <img src={Upload}/>
                          <p>Drag and drop files or Browse</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
        
      </Panel>
    </Collapse>
    </Space>
      </div>
    </div>
    </div>
  );
};
export default Calendar;
