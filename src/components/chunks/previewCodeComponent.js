// Codes By Mahdi Tasha
// Importing Part
import { Interweave } from 'interweave';

// Creating Functional Component And Exporting It As Defualt
export default function PreviewCodeComponent({code, className}) {
    // Returning JSX
    return <Interweave content={code}/>;
}