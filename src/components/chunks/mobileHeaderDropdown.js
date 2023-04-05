// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import IconComponent from "./iconComponent";
import ThemeChangerComponent from "./themeChangerComponent";

// Creating Functional Component And Exporting It As Defualt
export default function MobileHeaderDropdown() {
    // Creating State
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <li className={'md:hidden block'}>
            <button className={'flex items-center justify-center w-[32px] h-[32px]'} onClick={() => (isOpened) ? setOpened(false) : setOpened(true)}>
                <IconComponent type={'vertical-dots'}/>
            </button>
            {
                (isOpened) ? (
                    <div className={'bg-slate-900/80 absolute top-0 left-0 w-full h-full backdrop-blur-sm p-4 flex justify-end items-start'}>
                        <div className={'w-80 bg-slate-800 border-t-2 border-t-slate-600/30 rounded-md flex flex-col gap-3'}>
                            <ul>
                                <li className={'flex justify-between w-full'}>
                                    <a className={'w-full'} href="#"><button tabIndex={'-1'} className={'p-4 w-full text-left text-slate-400 font-bold text-sm hover:text-cyan-400'}>Docs</button></a>
                                    <button className={'p-4 text-slate-400 hover:text-slate-300'} onClick={() => setOpened(false)}><IconComponent type={'x'}/></button>
                                </li>
                                <li><a href="#"><button tabIndex={'-1'} className={'p-4 w-full text-slate-400 text-left font-bold text-sm hover:text-cyan-400'}>Components</button></a></li>
                                <li><a href="#"><button tabIndex={'-1'} className={'p-4 w-full text-slate-400 text-left font-bold text-sm hover:text-cyan-400'}>Blog</button></a></li>
                                <li><a href="#"><button tabIndex={'-1'} className={'p-4 w-full text-slate-400 text-left font-bold text-sm hover:text-cyan-400'}>Showcase</button></a></li>
                                <li><a href="#"><button tabIndex={'-1'} className={'p-4 w-full text-slate-400 text-left font-bold text-sm hover:text-cyan-400'}>Github</button></a></li>
                            </ul>
                            <li className={'mx-4'}><div className={'w-full border-b border-b-white/40'} /></li>
                            <li className={'relative'}><ThemeChangerComponent type={'mobile'}/></li>
                        </div>
                    </div>
                ) : false
            }
        </li>
    );
}
