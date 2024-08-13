function Redirect(url){
                window.location.href = url;
            }

function CreateNavBar() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var buttonStyle = {
        'display': 'inline-block',
        'border': 'none',
        'text-align': 'center',
        'cursor': 'pointer',
        'font-weight': '400',
        'border-radius': '4px',
        'width':'calc(10vw)',
        'font-size': '20px',
        'height': 'calc(10vh)',
        'color': '#CCCCCC',
        'overflow': 'hidden',
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: 'calc(33vw)', 'background-color': '#0000000d', 'height': 'calc(10vh)'}}>
                <a href="https://google.com/">
                    <img id="logo" style={{'width': 'calc(10vw)', 'height': 'calc(10vh)', 'position': 'fixed'}} src="../assets/logo_transparent.png" className="logo" />
                </a>
            </div>

            <div style={{ paddingRight: 'calc(1vw/2)', height: 'calc(10vh)'}}>
                <button className="navbar_button" style={buttonStyle} onClick={() => Redirect("../pages/index.html")}>
                    Main
                </button>
            </div>
            <div style={{paddingRight: 'calc(1vw/2)'}}>
                <button className="navbar_button" style={buttonStyle} onClick={() => Redirect("../pages/projects.html")}>
                    Projects
                </button>
            </div>
            <div style={{ paddingRight: 'calc(1vw/2)' }}>
                <button className="navbar_button" style={buttonStyle} onClick={() => Redirect("experience.html")}>
                    Experience
                </button>
            </div>
            <div style={{ paddingRight: 'calc(1vw/2)' }}>
                <button className="navbar_button" style={buttonStyle} onClick={() => Redirect("tools.html")}>
                    Tools
                </button>
            </div>

        </div>
    );
}
