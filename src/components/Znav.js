import React from "react";
import { Link } from "react-router-dom";

export default function Znav() {
    return (
        <div id="znav">
        <Link to="/" className="znav-link">
        about
        </Link>
        <Link to="/skills" className="znav-link">
        my skills
        </Link>
        </div>
    );
}
