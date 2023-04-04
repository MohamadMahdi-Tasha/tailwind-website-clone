// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function SectionComponent({children, className}) {
    // Returning JSX
    return <section className={className}><main>{children}</main></section>
}
