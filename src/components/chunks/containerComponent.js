// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function ContainerComponent({children, className}) {
    // Returning JSX
    return <div className={(className === undefined) ? 'max-w-[1200px] mx-auto' : `max-w-[1200px] mx-auto ${className}`}>{children}</div>
}
