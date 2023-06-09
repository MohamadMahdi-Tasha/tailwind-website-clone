// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function ListLinkComponent({children, link, className}) {
    // Returning JSX
    return (
        <li className={className}>
            <a className='text-white font-semibold hover:text-cyan-400 text-[15px]' href={(link === undefined) ? '#' : link}>
                {children}
            </a>
        </li>
    );
}
