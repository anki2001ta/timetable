import { Upload, UploadFile, UploadProps } from "antd";

const FileInput = ({
	icon,
	fileList,
	setFileList,
	showCard,
	setShowCard,
}: {
	icon: any;
	fileList: any;
	setFileList: any;
	showCard: any;
	setShowCard: any;
}) => {
	const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
		setFileList(newFileList);
		console.log(newFileList);
	};

	return (
		<div style={{ marginBottom: "20px" }}>
			<Upload
				accept=".png, .pdf, .docx, .jpeg, .gif, .webp, .mp4, .m4v, .mov, .mp3, .mpeg, .m4a"
				beforeUpload={() => false}
				onChange={handleChange}
				multiple
				maxCount={10}
				fileList={[]}></Upload>
			<img
				src={icon}
				alt="icon"
				height={20}
				onClick={() => setShowCard(!showCard)}
			/>
		</div>
	);
};

export default FileInput;
