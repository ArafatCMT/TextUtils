import React, {useState} from "react";

export default function About(){
    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: '#212129'
    })
    
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const [btnClass, setBtnTClass] = useState('btn btn-dark')

    const toggleHandle = () => {
        if (myStyle.backgroundColor === 'white') // dark hole light korbo
        {
            setMyStyle({
                backgroundColor: '#212129',
                color: 'white'
            })
            setBtnText('Enable Light Mode')
            setBtnTClass('btn btn-light')
        }
        else // light hole dark korbo
        {
            setMyStyle({
                backgroundColor: 'white',
                color: '#212129'
            })
            setBtnText('Enable Dark Mode')
            setBtnTClass('btn btn-dark')
        }
    }
    return (
        <>
        <div className="about-container border mt-5 p-5" style={myStyle}>
            <h1 className="mt-2">About Us</h1>
            <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        Analyze Your Text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        Free to Use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button className={btnClass} onClick={toggleHandle}>{btnText}</button>
            </div>
        </div>
        </>
    )
};