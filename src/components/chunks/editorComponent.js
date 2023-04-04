// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import LineNumbersFunction from '../../assets/js/prsimLineNumber';
import '../../assets/css/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({code, language, className}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return (
        <div className={'rounded-2xl border bg-slate-600/10 backdrop-blur-md border-slate-500/30 w-[1000px] overflow-y-hidden'}>
            <div className={'p-3 flex gap-1.5 w-full border-b border-b-slate-500/30'}>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
            </div>
            <pre><code className={`line-numbers language-${language}`}>{code}</code></pre>
        </div>
    );
}
