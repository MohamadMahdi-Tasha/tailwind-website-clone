// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import LineNumbersFunction from '../../assets/js/prsimLineNumber';
import '../../assets/css/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({code,language,className,height,openFiles,openedFileIndex}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return (
        <div className={(className === undefined) ? `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden` : `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden ${className}`}>
            <div>
                <div className={(openFiles !== undefined) ? 'flex items-center gap-1.5 p-3' : 'flex items-center gap-1.5 p-3 border-b border-b-slate-500/30'}>
                    <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                    <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                    <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                </div>
                {(openFiles !== undefined) ? (
                    <ul className={'flex border-b-2 border-b-slate-500/30'}>
                        {openFiles.map((file,index) => <li
                            key={index} data-key={index}>
                            <button data-opened-in-editor={(index === openedFileIndex)} className={'px-3 py-2 text-slate-500 text-sm data-[opened-in-editor="true"]:text-cyan-500 data-[opened-in-editor="true"]:relative data-[opened-in-editor="true"]:after-content-[""] data-[opened-in-editor="true"]:after:absolute data-[opened-in-editor="true"]:after:w-full data-[opened-in-editor="true"]:after:h-[2px] data-[opened-in-editor="true"]:after:bg-cyan-400 data-[opened-in-editor="true"]:after:bottom-[-2px] data-[opened-in-editor="true"]:after:left-0'}>{file}</button>
                        </li>)}
                    </ul>
                ) : false}
            </div>
            <pre className={(height === undefined) ? 'h-auto' : height}>
                <code className={`line-numbers language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
