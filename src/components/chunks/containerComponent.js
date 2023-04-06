// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function ContainerComponent({children, className}) {
    // Returning JSX
    return <div className={'max-w-[1200px] mx-auto md:pt-7 md:px-3 pt-4 px-4'}>{children}</div>
}
