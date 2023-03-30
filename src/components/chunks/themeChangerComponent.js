// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Creating Functional Component And Exporting It As Defualt
export default function ThemeChangerComponent() {
    // Returning JSX
    return (
        <>
            <button><IconComponent type={'moon'} /></button>
            <ul>
                <li><button><IconComponent type={'sun'} className={'mr-2'}/>Light</button></li>
                <li><button><IconComponent type={'moon'} className={'mr-2'}/>Dark</button></li>
                <li><button><IconComponent type={'desktop'} className={'mr-2'}/>System</button></li>
            </ul>
        </>
    );
}
