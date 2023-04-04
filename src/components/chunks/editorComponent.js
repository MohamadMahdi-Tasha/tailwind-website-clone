// Codes By Mahdi Tasha
// Importing Part
// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({children}) {
    // Returning JSX
    return (
        <h1><pre>{children}</pre></h1>
    );
}
