function Redirect(url) {
    window.location.href = url;
}

function CreateNavBar() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var buttonStyle = {
        display: 'inline-block',
        border: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: '400',
        borderRadius: '4px',
        width: 'calc(10vw)',
        fontSize: '20px',
        height: 'calc(10vh)',
        color: '#CCCCCC',
        overflow: 'hidden',
    };

    var navbar = document.createElement('div');
    navbar.style.display = 'flex';

    var logoContainer = document.createElement('div');
    logoContainer.style.paddingRight = 'calc(33vw)';
    logoContainer.style.backgroundColor = '#0000000d';
    logoContainer.style.height = 'calc(10vh)';

    var logoLink = document.createElement('a');
    logoLink.href = 'https://google.com/';

    var logo = document.createElement('img');
    logo.id = 'logo';
    logo.style.width = 'calc(10vw)';
    logo.style.height = 'calc(10vh)';
    logo.style.position = 'fixed';
    logo.src = '../assets/logo_transparent.png';
    logo.className = 'logo';

    logoLink.appendChild(logo);
    logoContainer.appendChild(logoLink);
    navbar.appendChild(logoContainer);

    var buttons = [
        { text: 'Main', url: '../pages/index.html' },
        { text: 'Projects', url: '../pages/projects.html' },
        { text: 'Experience', url: 'experience.html' },
        { text: 'Tools', url: 'tools.html' },
    ];

    buttons.forEach(buttonData => {
        var buttonContainer = document.createElement('div');
        buttonContainer.style.paddingRight = 'calc(1vw/2)';
        buttonContainer.style.height = 'calc(10vh)';

        var button = document.createElement('button');
        button.className = 'navbar_button';
        Object.assign(button.style, buttonStyle); // Apply the styles
        button.textContent = buttonData.text;
        button.onclick = function () {
            Redirect(buttonData.url);
        };

        buttonContainer.appendChild(button);
        navbar.appendChild(buttonContainer);
    });

    return navbar;
}
