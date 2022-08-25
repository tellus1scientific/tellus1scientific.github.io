class NavbarHeader extends HTMLElement{
    connectedCallback()
    {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="ourteam.html">Our Team</a></li>
                    <li><a href="#">(Contact)</a></li>
                    <li><a href="#">(Works)</a></li>
                    <li><a href="#">(Clients)</a></li>			
                </ul>
            </nav>
            <br>
        `
    }
}
customElements.define('navbar-header', NavbarHeader)

class TeamNavbarHeader extends HTMLElement{
    connectedCallback()
    {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../ourteam.html">Our Team</a></li>
                    <li><a href="#">(Contact)</a></li>
                    <li><a href="#">(Works)</a></li>
                    <li><a href="#">(Clients)</a></li>			
                </ul>
            </nav>
            <br>
        `
    }
}
customElements.define('team-navbar-header', TeamNavbarHeader)
