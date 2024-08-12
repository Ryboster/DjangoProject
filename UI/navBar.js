function Redirect(url){
                window.location.href = url;
            }

function CreateNavBar() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var buttonIndent = w / 200;
    var logoIndent = w / 3;
    var logoHeight = h / 10;

    return (
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: logoIndent }}>
                <a href="https://google.com/">
                    <img id="logo" src="../assets/logo_transparent.png" className="logo" />
                </a>
            </div>

            <div style={{ paddingRight: buttonIndent, height: logoHeight }}>
                <button className="navbar_button" onClick={() => Redirect("../pages/index.html")}>
                    Main
                </button>
            </div>
            <div style={{ paddingRight: buttonIndent }}>
                <button className="navbar_button" onClick={() => Redirect("../pages/projects.html")}>
                    Projects
                </button>
            </div>
            <div style={{ paddingRight: buttonIndent }}>
                <button className="navbar_button" onClick={() => Redirect("experience.html")}>
                    Experience
                </button>
            </div>
            <div style={{ paddingRight: buttonIndent }}>
                <button className="navbar_button" onClick={() => Redirect("https://www.samaritans.org/scotland/how-we-can-help/contact-samaritan/?utm_source=google&utm_medium=organic&utm_campaign=onebox")}>
                    Contact
                </button>
            </div>
            <div style={{ paddingRight: buttonIndent }}>
                <button className="navbar_button" onClick={() => Redirect("appearances.html")}>
                    Appearances
                </button>
            </div>
            <div style={{ paddingRight: buttonIndent }}>
                <button className="navbar_button" onClick={() => Redirect("tools.html")}>
                    Tools
                </button>
            </div>
        </div>
    );
}
