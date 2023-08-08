import React from 'react'

const NavbarMain = () => {
    return (

        <nav id="site-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #444141;">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon" data-bs-target="#offcanvasDarkNavbar"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" data-bs-hideresize="true" tabindex="-1"
                    id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbar">
                    <div class="offcanvas-header text-white" style="background-color: #444141;">
                        <h5 class="offcanvas-title" id="offcanvasLabel">Amazing Events</h5>
                        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" style="background-color: #444141;">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./home.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./upcoming_events.html">Upcoming Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./past_events.html">Past Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./contact.html">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="./stats.html">Stats</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavbarMain