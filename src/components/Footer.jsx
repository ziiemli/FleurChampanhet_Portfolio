import React from "react"

const Footer = () => {
    //contact mail
    function sendEmail() {
        window.location.href = "mailto:ziiemli@outlook.fr"
    }

    return (
        <footer>
            <p>© 2023 Fleur Champanhet</p>
            <p>Created by Zilin Moulin</p>
            {/* <Link>Contact</Link>
            <Link>Legal Notice</Link> */}
        </footer>
    )
}

export default Footer
