import { Key, useRef, useState } from "react";
import { minimalToast } from "../../utils/toast";
import { MdModeEditOutline } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import "./ImagePreview.scss";
import { Carousel, Image, Modal } from "antd";

export default function ImagePreview({
	files,
	setFiles,
	showPrev,
	setShowPrev,
	showCard,
	setShowCard,
}: {
	files: any;
	setFiles: any;
	showPrev: any;
	setShowPrev: any;
	showCard: any;
	setShowCard: any;
}) {
	const imageInputRef = useRef<HTMLInputElement>(null);
	const [currentImage, setCurrentImage] = useState<number>(0);

	const handleImages = (e: { target: { files: any } }): any => {
		let files = Array.from(e.target.files);
		files.forEach((img: any) => {
			console.log(img);
			if (img.size > 1024 * 1024 * 50) {
				minimalToast(
					`${img.name} size is too large max 50mb allowed.`,
					"error"
				);
				files = files.filter((item: any) => item.name !== img.name);
				return;
			} else {
				const reader = new FileReader();
				reader.readAsDataURL(img);
				reader.onload = (readerEvent) => {
					setFiles((files: any) => [...files, readerEvent?.target?.result]);
				};
			}
		});
	};

	const setCurrentImageIndex = (index: number) => {
		setCurrentImage(index);
	};

	return (
		<>
			<div className="overflow_a scrollbar">
				<div className="add_pics_wrap">
					<input
						type="file"
						accept=".png, .pdf, .docx, .jpeg, .gif, .webp, .mp4, .m4v, .mov, .mp3, .mpeg, .m4a"
						multiple
						hidden
						ref={imageInputRef}
						onChange={handleImages}
					/>
					{files && files.length ? (
						<>
							<div className="add_pics_inside1 p0">
								<div className="preview_actions">
									<button className="hover1">
										<MdModeEditOutline /> Edit
									</button>
									<button
										className="hover1"
										onClick={() => {
											imageInputRef?.current?.click();
										}}>
										<RiAddBoxFill color="black" size={20} /> Add Photos/Videos
									</button>
								</div>
								<div
									className="small_white_circle"
									onClick={() => {
										setFiles([]);
									}}>
									<AiFillCloseCircle color="black" size={25} />
								</div>
								<div
									className={
										files.length === 1
											? "preview1"
											: files.length === 2
											? "preview2"
											: files.length === 3
											? "preview3"
											: files.length === 4
											? "preview4 "
											: files.length === 5
											? "preview5"
											: files.length % 2 === 0
											? "preview6"
											: "preview6 singular_grid"
									}>
									{files
										.slice(0, 3)
										.map(
											(
												file: string | undefined,
												index: Key | null | undefined
											) => (
												<img key={index} src={file} />
											)
										)}
									{files.length > 4 && (
										<div
											className="hover1"
											onClick={() => {
												setShowPrev(true);
												setCurrentImageIndex(0);
											}}
											style={{ fontWeight: 800, fontSize: "16px" }}>
											+{files.length - 4} more
											<img
												style={{ filter: "blur(4px)" }}
												src={files[files.length - 1]}
												onClick={() => setShowPrev(true)}
											/>
										</div>
									)}
									<Modal
										open={showPrev}
										onCancel={() => setShowPrev(false)}
										footer={null}>
										<Carousel
											effect="fade"
											dots
											easing="linear"
											afterChange={(current) => setCurrentImageIndex(current)}
											initialSlide={currentImage}>
											{files.map(
												(
													file: string | undefined,
													index: Key | null | undefined
												) => (
													<div
														className="carousel-container-images"
														key={index}>
														<Image width={500} height={400} src={file} />
													</div>
												)
											)}
										</Carousel>
									</Modal>
								</div>
							</div>
						</>
					) : (
						<div className="add_pics_inside1">
							<div
								className="small_white_circle"
								onClick={() => {
									setShowCard(() => false);
									setShowPrev(() => false);
								}}>
								<AiFillCloseCircle color="black" size={25} />
							</div>
							<div
								className="add_col"
								onClick={() => {
									imageInputRef?.current?.click();
								}}>
								<div className="add_circle">
									<RiAddBoxFill color="black" size={30} />
								</div>
								<span>Add Photos/Videos</span>
								<span>or drag and drop</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
