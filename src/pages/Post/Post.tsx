/** importing libraries  **/
import { Spin } from "antd";
import { useState } from "react";

/** importing dependencies  **/
import FileInput from "../../components/FileInput";
import Video from "../../assets/video.svg";
import Gallery from "../../assets/gallery.svg";
import Text from "../../assets/text.svg";
import File from "../../assets/file.svg";
import Live from "../../assets/live.svg";
import Reels from "../../assets/reels.svg";
import Group from "../../assets/group.svg";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import { createPost } from "../../redux/post/post";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { minimalToast } from "../../utils/toast";
import dataURItoBlob from "../../utils/dataURItoBlob";
import { RootState } from "../../redux/store";
import { api } from "../../services/Apis";
import Feed from "../../components/Feed/Feed";
import { fetchAllPosts } from "../../redux/post/post";
import "./Post.scss";

const Post = () => {
	const [fileList, setFileList] = useState<Blob | any>([]);
	const [text, setText] = useState("");
	const [showPrev, setShowPrev] = useState(false);
	const [showCard, setShowCard] = useState(false);
	const [loading, setLoading] = useState(false);

	const dispatch = useAppDispatch();

	const user = useAppSelector((state: RootState) => state.auth);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!text && fileList.length === 0) {
			dispatch(
				minimalToast("Please add some text or media to your post", "error")
			);
			return;
		}

		setLoading(true);

		try {
			const formData = new FormData();
			formData.append("text", text);

			if (fileList.length > 0) {
				const path = `${user.user.name}/post_images`;
				formData.append("path", path);

				for (let i = 0; i < fileList.length; i++) {
					const file: Blob | any = dataURItoBlob([fileList[i]])[0];
					formData.append("files", file, `file${i}`);
				}

				const header = {
					Authorization: `Bearer ${user.access_token}`,
				};

				const { data } = await api.media.upload(
					formData.get("path"),
					formData.getAll("files"),
					header
				);

				const files = Object.values(data).map((obj: any) => obj);
				console.log(files);

				await dispatch(createPost({ text, files }));
				await dispatch(fetchAllPosts());
			} else {
				await dispatch(createPost({ text }));
				await dispatch(fetchAllPosts());
			}
			setLoading(false);

			// Clear text and fileList values
			setText("");
			setFileList([]);
			setShowCard(() => false);
		} catch (error: any) {
			console.log(error);
			setLoading(false);
			dispatch(minimalToast(error.message, "error"));
		}
	};

	return (
		<div className="post">
			<h2 className="header">Teacher’s Social</h2>
			<div className="card">
				<Spin spinning={loading} size="large">
					<div className="textbox">
						<form onSubmit={handleSubmit}>
							<textarea
								placeholder="Post your thoughts..."
								name="text"
								value={text}
								onChange={(event) => setText(event.target.value)}
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
				</Spin>
				<Feed />
			</div>
		</div>
	);
};

export default Post;
