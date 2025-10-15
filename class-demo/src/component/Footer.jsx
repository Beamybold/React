function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} Naija tech Hub. All rights reserved. </p>
        </footer>
    );
}

export default Footer;