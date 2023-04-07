// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import LineNumbersFunction from '../../assets/js/prsimLineNumber';
import '../../assets/css/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({code,language,className,height}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return (
        <div className={(className === undefined) ? `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden` : `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden ${className}`}>
            <div className={'p-3 flex gap-1.5 w-full border-b border-b-slate-500/30'}>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
            </div>
            <pre className={(height === undefined) ? 'h-auto' : height}>
                <code className={`line-numbers language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
