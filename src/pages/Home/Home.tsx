import TaskAndGoals from "../../components/Home/acrodion";
import Post from "../../components/Post/Post";
import "./Home.scss";
import { EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

const Home = () => {
  return (
    // maim div
    <div>
      {/* flex div */}
      <div className="home">
        <div >
            <div className="home_heading">TimeTable</div>
            <div className="time_data">
              <div><p>09:30</p></div> 
              <div className="colored_component">
                <div>
                  <div className="checkbox">
                    <Checkbox/>
                  </div>
                  <div>
                    <h5>7th D</h5>
                    <h5>9:30-10:30</h5>
                  </div>
                </div>
               
                <div>
                  <p>Geography</p>
                  <p>Chapter 1 : Name of the Chapter</p>
                </div> 
                <Button>
                  <EditOutlined />
                </Button>
              </div>
            </div>
            {/* time component  end*/}
            {/* acrodion section start */}
          </div> 

          {/* <TaskAndGoals/> */}
           {/* </div> */}
          
   
           {/* Acrodion section end */}
            {/* </div> */}
            {/* THIS IS THE SIDE POST BAR */}
            {/* <div className="post_home">
        <Post />*/}
     </div>  
     
   
     

    </div>
  );
};

export default Home;


