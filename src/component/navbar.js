import { Fragment } from "react";
import './navbar.css'

export default function Navbar() {
    return (
        <Fragment>
            <nav className="navigation">
                <a href="/" className="brand-name">
                    FunctionUp
                </a>

                <div
                    className="navigation-menu">
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}