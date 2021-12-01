import React, { useRef, useState } from "react";
import { Form, Header, Icon, Image, Message, Segment } from "semantic-ui-react";

const UploadImage = () => {
    const [highlight, setHighlight] = useState(false);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [mediaError, setMediaError] = useState(false);
    const [media, setMedia] = useState(null);

    const inputRef = useRef();

    const handleDrag = (e) => {
        e.preventDefault();
        setHighlight(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setHighlight(false);
    };

    const handleValidImage = (fileType) => {
        const validTypes = ["image/jpeg", "image/png", "image/jpg"];
        return validTypes.includes(fileType);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (handleValidImage(droppedFile.type)) {
            const objUrl = URL.createObjectURL(e.dataTransfer.files[0]);
            setMediaPreview(objUrl);
            setMediaError(false);
            setHighlight(true);
            setMedia(droppedFile);
        } else {
            setMediaPreview(null);
            setMediaError(true);
            setHighlight(false);
            setMedia(null);
        }
    };

    const handleMediaInput = (e) => {
        const selectedFile = e.target.files[0];
        if (handleValidImage(selectedFile.type)) {
            const objUrl = URL.createObjectURL(selectedFile);
            setMediaPreview(objUrl);
            setMediaError(false);
            setHighlight(true);
            setMedia(selectedFile);
        } else {
            setMediaPreview(null);
            setMediaError(true);
            setHighlight(false);
            setMedia(false);
        }
    };
    return (
        <Form.Field>
            <Segment color="red">
                <div
                    onDragOver={handleDrag}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    style={{
                        height: "200px",
                        border: highlight ? " 2px solid #2ed573" : "none",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: highlight
                            ? "rgb(209 209 209 / 60%)"
                            : "rgb(209 209 209 / 40%)",
                    }}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleMediaInput}
                        name="media"
                    />
                    {mediaPreview ? (
                        <Image
                            onClick={() => inputRef.current.click()}
                            src={mediaPreview}
                            alt="profile"
                        />
                    ) : (
                        <Segment size="mini">
                            <Header icon>
                                <Icon
                                    onClick={() => inputRef.current.click()}
                                    name="file image outline"
                                    style={{ cursor: "pointer" }}
                                />
                                Drag and drop your image
                            </Header>
                        </Segment>
                    )}
                </div>
            </Segment>
            {mediaError && (
                <Message
                    color="red"
                    content="Please Select a Valid Image (jpg, png, jpeg)"
                />
            )}
        </Form.Field>
    );
};

export default UploadImage;
