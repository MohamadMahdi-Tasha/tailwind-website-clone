// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function ListLinkComponent({children, link}) {
    // Returning JSX
    return (
        <li>
            <a className='text-white font-semibold hover:text-cyan-400' href={(link === undefined) ? '#' : link}>
                {children}
            </a>
        </li>
    );
}
