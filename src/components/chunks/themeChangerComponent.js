// Codes By Mahdi Tasha
// Importing Part
import React, {useState} from "react";
import IconComponent from "./iconComponent";

// Creating Functional Component And Exporting It As Defualt
export default function ThemeChangerComponent() {
    // Creating State For Opening And Closing The DropDown
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <>
            <button onClick={() => (isOpened) ? setOpened(false) : setOpened(true)}
                    className={'w-[30px] h-[30px] flex items-center justify-center'}>
                <IconComponent type={'moon'} />
            </button>
            {(isOpened) ? (
                <ul className={'absolute right-0 top-[40px]'}>
                    <li><button className={'flex p-3 w-40 text-white bg-slate-700 border-t-[3px] border-white/20 focus:bg-slate-600 rounded-t-2xl hover:bg-slate-600'}><IconComponent type={'sun'} className={'mr-2'}/>Light</button></li>
                    <li><button className={'flex p-3 w-40 text-white bg-slate-700 focus:bg-slate-600 hover:bg-slate-600'}><IconComponent type={'moon'} className={'mr-2'}/>Dark</button></li>
                    <li><button className={'flex p-3 w-40 text-white bg-slate-700 focus:bg-slate-600 rounded-b-2xl hover:bg-slate-600'}><IconComponent type={'desktop'} className={'mr-2'}/>System</button></li>
                </ul>
            ) : false}
        </>
    );
}
