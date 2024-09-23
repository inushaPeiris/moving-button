import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";

const App = () => {
    const [isOneHide, setOneHide] = useState(true);
    const [isTwoHide, setTwoHide] = useState(false);
    const [isDisplayFinalContent, setDisplayFinalContent] = useState(false);

    const handleOnMouseEnterButton1 = () => {
        setOneHide(true);
        setTwoHide(false);
    };
    const handleOnMouseEnterButton2 = () => {
        setTwoHide(true);
        setOneHide(false);
    };
    const handleOnClick = () => {
        setDisplayFinalContent(true);
    };

    return (
        <>
            <div className="container-2">
                <h1>Are you Idiot?</h1>
            </div>
            <div className="container-2">
                <Button variant="contained" onClick={handleOnClick}>
                    Yes 🥺
                </Button>
            </div>
            <div className="container-2">
                <Button
                    onMouseEnter={handleOnMouseEnterButton1}
                    variant="contained"
                    sx={{
                        display: isOneHide ? "none" : "block",
                        position: "relative",
                        left: isOneHide ? "0" : "-20vw",
                        marginBottom: "10px",
                    }}
                >
                    No 😎
                </Button>
                <Button
                    variant="contained"
                    onMouseEnter={handleOnMouseEnterButton2}
                    display={isTwoHide ? "none" : "block"}
                    sx={{
                        display: isTwoHide ? "none" : "block",
                        marginBottom: "10px",
                    }}
                >
                    No 😎
                </Button>
            </div>
            {isDisplayFinalContent ? (
                <div className="container-2">
                    <h2> Okay you are an idiot! 🤣 </h2>
                </div>
            ) : null}
        </>
    );
};

export default App;
