import "./Task&Goal.scss";
import coin from "../../assets/coins.svg";
import Upload from "../../assets/Upload.svg";
import bin from "../../assets/collagebin.png";
import five from "../../assets/five.svg"
import collagepic from "../../assets/collagepic.png"
import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import moment from "moment";

const { Panel } = Collapse;
const Feedback: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  let date = moment();

let currentDate = date.format('DD/MM/YYYY');
console.log(currentDate); 
  return (
    <div className="task_container">
      <div className="dropdown">
        <Collapse onChange={onChange} expandIconPosition='end'>

          {/* PEER BVDFJKVFJHLJFDHVLDFFLDKDFLKKLFDLKDFLJKVLDFKJVKLJFDVFDJ. */}




          <Panel header="Peer Feedback" key="1">
            <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Faciliting a session</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <p>Teachers Feedback</p>
                    <input type="text" placeholder="Enter Feedback" />
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
                        <div>
                          <img src={bin} alt="" />
                        </div>
                        <div>
                          <img src={collagepic}/>
                        </div>
                        <div>
                          <img className="upload_pic" src={Upload}/>
                          <p>Drag and drop files or Browse</p>
                        </div>
                      </div>
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="wrapper">
              {
                <div className="peer_container">
                  <p>Collaborating with colleague</p>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />
                   <div className="ip_cont">
                   
                    <input type="text" placeholder="Enter Class & Section" />
                    <input type="text" placeholder="Enter name of Subject" />
                    <input type="text" placeholder="Enter name of Subject Teacher" />
                  </div>
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
          </Panel>


          {/* NVKFNVJFNVLJKNGBGLJHBGKFJLBVKFNVFJKVNFJVBNFJVFJVNF */}



          <Panel header="Learner Feedback" key="2">
          <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Action Researcher</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <p>Enter Problem</p>
                    <input type="text" placeholder="Enter Problem" />

                    
                    <p>Action Taken</p>
                    <input type="text" placeholder="Enter Action Taken" />
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
          </Panel>




          {/* JDJDFJDKFDJSFHJKDFCNNC MNC */}

         

          <Panel header="Management Feedback" key="3" >
          <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Uploading evidence of implementation of planner</h3>

                  <p>{currentDate}</p>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <p>Time of Evidence</p>
                    <input type="text"  />
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>

            <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Attending PD sessions</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <p>Learning from  session</p>
                    <input type="text" placeholder="Enter Feedback" />
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
          </Panel>

          <Panel header="Parent Feedback" key="4">
            <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Teacher - Parent partnership</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />
                   <div className="parent_div">
                    <input type="text" placeholder="Enter class & section" />
                    <input type="text" placeholder="Enter name of teacher" />
                    </div>
                  </div>

                  <div className="contex">
                  <p>Description about Goal</p>
                 
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />
                     
                     
                     
                    </div> 
                    <button>Add New Goal</button>
                    <img src={five} />
                  </div>
               
              }
            </div>
            <div className="wrapper">
              {
                <div className="peer_container">
                  <p>Collaborating with colleague</p>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />
                   <div className="ip_cont">
                   
                    <input type="text" placeholder="Enter Class & Section" />
                    <input type="text" placeholder="Enter name of Subject Teacher" />
                    <input type="text" placeholder="Enter name of Subject Teacher" />
                  </div>
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
          </Panel>












          <Panel header="Others" key="5">
            <p>  <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>Faciliting a session</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />

                    <p>Teachers Feedback</p>
                    <input type="text" placeholder="Enter Feedback" />
                  </div>

                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="wrapper">
              {
                <div className="peer_container">
                  <h3>SDJ Initiative</h3>
                  <div className="peer_sub">
                    <p>Deadline Date</p>
                    
                    <input
                      type="text"
                      placeholder="Enter Deadline for This Task"
                    />
                   <div className="ip_cont">
                   
                    <input type="text" placeholder="Enter Class & Section" />
                    <input type="text" placeholder="Enter name of Subject Teacher" />
                    <input type="text" placeholder="Enter name of Subject Teacher" />
                  </div>  
                  <div className= "peer_sub_ip">
                  <p>Teacher's Feedback</p>
                  
                    <input
                      type="text"
                      placeholder="Enter  Feedback"
                    />
                  
                  </div>
                </div>
                  <div className="contex">
                    <p>Upload Evidence/Result</p>
                    <div  className="mini_div">
                      <div className="mini_div_Container">
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
                     
                      <img src={five} />
                     
                    </div>
                  </div>
                </div>
              }
            </div></p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Feedback;