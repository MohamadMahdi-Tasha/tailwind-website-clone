// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function ListLinkComponent({children, link}) {
    // Returning JSX
    return (
        <li>
            <a href={(link === null) ? '#' : link}>
                {children}
            </a>
        </li>
    );
}
