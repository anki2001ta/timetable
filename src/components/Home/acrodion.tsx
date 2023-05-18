import "../Home/acrodion.scss";
import "../../pages/TaskAndGoals/Task&Goal.scss";
import Upload from "../../assets/Upload.svg";
import bin from "../../assets/collagebin.png";
import five from "../../assets/five.svg"
import collagepic from "../../assets/collagepic.png"
import { Collapse, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const TaskAndGoals: React.FC = () => (
    <div className="wrapp">
    <p className="para">Upcoming Tasks</p>
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

                    <h4>Teachers Feedback</h4>
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
    <Collapse collapsible="header" defaultActiveKey={['1']} size="large" ghost="false"
    className="collapse"
    expandIconPosition="end"
    >
      <Panel header="Action Research" key="1"
      className="panel">
      
      </Panel>
    </Collapse>
    <Collapse collapsible="header" defaultActiveKey={['1']} size="large" ghost="false"
    className="collapse"
    expandIconPosition="end"
    >
      <Panel header="Attending Personality Development Session " key="1"
      className="panel">
     
      </Panel>
    </Collapse>
  </Space>
  </div>
);

export default TaskAndGoals;
