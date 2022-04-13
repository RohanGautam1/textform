import React, { useState } from 'react'


export default function TextBox(props) {

    const handleUpClick = () => {
        // console.log("uprcs was clkd");
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Converted to Lowercase", "success");
    }
    const textClearClick = () => {
        let newtext = '';
        settext(newtext)
        props.showAlert("Text Cleared", "success");

    }
    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert("Extra spaces removed", "success");

    }
    const handleCopy = () => {
        //    var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");

    }

    const handleOnChange = (evt) => {
        settext(evt.target.value);
    }
    const [text, settext] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={textClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove space</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summaary</h2>
                <p> {text.split(" ").length} Words and {text.length} Characters</p>
                <p> {.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the box above to preview here"}</p>
            </div>

        </>
    )
}
