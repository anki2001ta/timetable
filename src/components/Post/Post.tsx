import { Form, Input, UploadFile } from "antd";
import "./Post.scss";
import FileInput from "../FileInput";
import Video from "../../assets/video.svg";
import Gallery from "../../assets/gallery.svg";
import Text from "../../assets/text.svg";
import File from "../../assets/file.svg";
import Live from "../../assets/live.svg";
import Reels from "../../assets/reels.svg";
import Group from "../../assets/group.svg";
import ImagePreview from "../ImagePreview/ImagePreview";
import { FormEvent, useState } from "react";
import { createPost } from "../../redux/post/post";
import { useAppDispatch } from "../../hooks/hooks";

const Post = () => {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [textInputValue, setTextInputValue] = useState("");
	const [showPrev, setShowPrev] = useState(false);
	const [showCard, setShowCard] = useState(false);

	const dispatch = useAppDispatch();

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("text", textInputValue);

		for (let i = 0; i < fileList.length; i++) {
			const file = fileList[i].originFileObj;
			if (file) {
				formData.append("files", file);
			}
		}
		await dispatch(createPost(formData));

		// Clear text and fileList values
		setTextInputValue("");
		setFileList([]);
	};

	return (
		<div className="post">
			<h3 className="header">Teacher’s Social</h3>
			<div className="card">
				<div className="textbox">
					<form onSubmit={handleSubmit}>
						<textarea
							placeholder="Post your thoughts..."
							name="text"
							value={textInputValue}
							onChange={(event) => setTextInputValue(event.target.value)}
						/>
						{showCard ? (
							<ImagePreview
								showPrev={showPrev}
								files={fileList}
								setFiles={setFileList}
								setShowPrev={setShowPrev}
								showCard={showCard}
								setShowCard={setShowCard}
							/>
						) : null}
						<div className="addition">
							<div className="inputs">
								<span>
									<FileInput
										icon={Video}
										fileList={fileList}
										setFileList={setFileList}
										showCard={showCard}
										setShowCard={setShowCard}
									/>
								</span>
								<span>
									<FileInput
										icon={Gallery}
										fileList={fileList}
										setFileList={setFileList}
										showCard={showCard}
										setShowCard={setShowCard}
									/>
								</span>
								<span>
									<img src={Text} alt="icon" height={20} />
								</span>
								<span>
									<FileInput
										icon={File}
										fileList={fileList}
										setFileList={setFileList}
										showCard={showCard}
										setShowCard={setShowCard}
									/>
								</span>
							</div>
							<div>
								<button className="posting" type="submit">
									Post
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="sharing">
					<div className="reels">
						<span>
							<img src={Reels} />
						</span>
						<span>Reels</span>
					</div>
					<div className="group">
						<span>
							<img src={Group} />
						</span>
						<span>Group</span>
					</div>
					<div className="live">
						<span>
							<img src={Live} />
						</span>
						<span>Live</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
