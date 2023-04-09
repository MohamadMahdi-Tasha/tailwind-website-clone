// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect} from "react";
import IconComponent from "./chunks/iconComponent";
import Prism from 'prismjs';
import LineNumbersFunction from '../assets/js/prsimLineNumber';
import '../assets/css/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function  VscodeEditorComponent({selfLang, selfCode}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return (
        <div className={'md:rounded-xl rounded-0 w-full overflow-hidden backdrop-blur-md bg-slate-900/30 border border-slate-500/30 absolute left-0 md:top-[-35px] top-[20px]'}>
            <div className={'p-3 border-b border-slate-500/30 flex gap-1.5'}>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
            </div>
            <div className={'flex'}>
                <div className={'border-r border-r-slate-500/30 p-3 md:flex hidden flex-col items-center justify-between text-slate-500'}>
                    <IconComponent type={'vscode-top'}/>
                    <IconComponent type={'vscode-bottom'}/>
                </div>
                <div className={'w-full'}>
                    <pre className={'md:h-[500px] h-[300px] md:w-[1150px] w-full'}>
                    <code className={`line-numbers language-${selfLang}`}>{selfCode}</code>
                </pre>
                    <div className={'border-t border-t-slate-500/30 w-full p-4'}>
                        <h6 className={'font-mono text-sm text-slate-300 mb-3'}>Problems</h6>
                        <h6 className={'text-slate-400 font-mono text-sm flex items-center'}><IconComponent type={'danger'}/> <span className={'ml-2 mr-2'}>'flex'</span> applies the same CSS property as 'block'.<span className={'text-slate-500 ml-3'}>cssConflict [1, 20]</span></h6>
                        <h6 className={'text-slate-400 font-mono text-sm flex items-center'}><IconComponent type={'danger'}/> <span className={'ml-2 mr-2'}>'flex'</span> applies the same CSS property as 'block'.<span className={'text-slate-500 ml-3'}>cssConflict [1, 20]</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}