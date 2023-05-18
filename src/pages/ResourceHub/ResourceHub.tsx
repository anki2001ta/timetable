import "./Resources.scss";
import note from "../../assets/note.svg";
import scale from "../../assets/scale.svg";
import test from "../../assets/test.svg";
import paper from "../../assets/paper.svg";
import Vector from "../../assets/Vector.svg";

let resources = [
  {
    src: note,
    name: "Question Bank(10)",
    arrow: Vector,
    backgroundColor: "#FFF1E5",
  },
  {
    src: scale,
    name: "Worksheets(10)",
    arrow: Vector,
    backgroundColor: "#F6F3FF",
  },
  {
    src: test,
    name: "Question Papers(10)",
    arrow: Vector,
    backgroundColor: "#E5F6FF",
  },
  {
    src: paper,
    name: "Case Study(3)",
    arrow: Vector,
    backgroundColor: "#E2F6E9",
  },
  {
    src: scale,
    name: "Teachers Resources",
    arrow: Vector,
    backgroundColor: "#F6F3FF",
  },
];

interface ImageProps {
  note: string;
  scale: string;
  paper: { [key: string]: any };
  Vector: { [key: string]: any };
}

const imageProps: ImageProps = {
  note: "some note",
  scale: "some scale",
  paper: {},
  Vector: {},
};

const ResourceHub = () => {
  return (
    <div>
      <p className="text">Resources Hub</p>

      <div className="main_cont">
        {resources &&
          resources.map(({ src, name, arrow, backgroundColor }) => (
            <div>
              <div className="cont_div">
                <div
                  className="sub_cont"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <div className="first_data">
                    <img src={src} alt={imageProps.note} />
                    <p>{name}</p>
                  </div>
                  <div>
                    <img src={arrow} alt={imageProps.note} />
                  </div>
                </div>
                <div className="arrow"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResourceHub;
