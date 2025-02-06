import React, {useState} from "react";
 

export default function TextForm(props){
    
    const handleUpClick = () =>{
        // console.log("handleClicked on fire.")
        setText(text.toUpperCase())
        props.ShowAlart("Convert to UpperCase", "success")
    }

    const handleLoClick = () =>{
        setText(text.toLowerCase())
        props.ShowAlart("Convert to LowerCase", "success")
    }

    const handleClear = () =>{
        setText("")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text copied to clipboard!");
            document.getElementById('msg').style.display = 'block'

            setTimeout(() => {
                document.getElementById('msg').style.display = 'none'
            }, 1500);
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    }

    const handleTitleClick = () =>{
        let value = "";
        let words = [];
        let i = 0;
        let length = text.length;

        for(let char of text)
        {
            i++;
            if(char !== " ")
            {
                if (value === "")
                {
                    value += char.toUpperCase();
                }
                else
                {
                    value += char.toLowerCase();
                    if (length === i)
                    {
                        // console.log(i)
                        words.push(value);
                        value = "";
                    }
                }
            }
            else
            {
                words.push(value);
                value = "";
            }
        }
        setText(words.join(" "));
        props.ShowAlart("Convert to Titlecase", "success")
        // console.log(words.join(" "));
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.ShowAlart("Removed ExtraSpace", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
        <div style={{color: props.mode ==='dark'?'white':'#424D61'}}>
            <h1 className="mt-2 summary">{props.heading}</h1>
            <p className="msg" id="msg">Text copied to clipboard!</p>
            <div className="mb-3 mt-2">
                <textarea className={`form-control ${props.mode === 'dark' ? 'dark-mode' : ''}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder="type here..." rows="8" style={{backgroundColor: props.mode === 'dark'?'#303030': 'white', color: props.mode==='dark'?'white':'#212529', }}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-warning mx-1" onClick={handleTitleClick}>Convert to TitleCase</button>
            <button className="btn btn-info mx-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>
            <button className="btn btn-dark mx-1" onClick={handleCopyClick}>Copy to ClipBoard</button>
            <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>


            <div className="mt-4">
                <h2 className="summary">Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters.</p>
            </div>

            <div className=" mt-3">
                <h2 className="summary">Preview</h2>
                <p>{text.length? text: 'Enter something in the textbox above to preview here...'}</p>
            </div>
        </div>
        </>

        
    )
};