// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import LineNumbersFunction from '../../assets/js/prsimLineNumber';
import '../../assets/css/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent(props) {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Smaller Parts Of This Component
    function ThreeIconsComponent() {
        // Returning JSX
        return (
            <>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
                <div className={'w-2.5 rounded-full h-2.5 bg-slate-600'}></div>
            </>
        );
    }

    function TopSideComponent() {
        // Conditional Rendering
        if (props.openFiles !== undefined) {
            return (
                <div>
                    <div className={'flex items-center gap-1.5 p-3'}><ThreeIconsComponent /></div>
                    <ul className={'flex border-b-2 border-b-slate-500/30'}>
                        {props.openFiles.map((file,index) => <li
                            key={index} data-key={index}>
                            <button data-opened-in-editor={(index === props.openedFileIndex)} className={'px-3 py-2 text-slate-500 text-sm data-[opened-in-editor="true"]:text-cyan-500 data-[opened-in-editor="true"]:relative data-[opened-in-editor="true"]:after-content-[""] data-[opened-in-editor="true"]:after:absolute data-[opened-in-editor="true"]:after:w-full data-[opened-in-editor="true"]:after:h-[2px] data-[opened-in-editor="true"]:after:bg-cyan-400 data-[opened-in-editor="true"]:after:bottom-[-2px] data-[opened-in-editor="true"]:after:left-0'}>{file}</button>
                        </li>)}
                    </ul>
                </div>
            );
        } else if (props.openedSide !== undefined) {
            return (
                <div>
                    <div className={'flex items-center gap-1.5 p-3'}><ThreeIconsComponent /></div>
                    <div className={'border-b border-b-slate-500/30'}>
                        <button className={'text-cyan-500 after-content-[""] after:absolute after:bottom-[-1px] text-sm px-3 py-2 after:left-0 after:w-full after:bg-cyan-500 after:h-[1px] relative'}>{props.fileSide1}</button>
                    </div>
                </div>
            );
        } else return <div className={'flex items-center gap-1.5 p-3 border-b border-b-slate-500/30'}><ThreeIconsComponent /></div>
    }

    function BottomSideComponent() {
        // Conditional Rendering
        if (props.openedSide !== undefined) {
            return (
                <div>
                    <pre className={'h-[300px]'}>
                        <code className={`line-numbers language-${props.languageSide1}`}>
                            {props.codeSide1}
                        </code>
                    </pre>
                    <div>
                        <div className={'border-b border-b-slate-500/30'}>
                            <button className={'text-cyan-500 after-content-[""] after:absolute after:bottom-[-1px] text-sm px-3 py-2 after:left-0 after:w-full after:bg-cyan-500 after:h-[1px] relative'}>{props.fileSide2}</button>
                        </div>
                        <pre className={'h-[300px]'}>
                            <code className={`line-numbers language-${props.languageSide2}`}>
                                {props.codeSide2}
                            </code>
                        </pre>
                    </div>
                </div>
            );
        } else {
            return (
                <pre className={(props.height === undefined) ? 'h-auto' : props.height}>
                    <code className={`line-numbers language-${props.language}`}>
                        {props.code}
                    </code>
                </pre>
            );
        }
    }

    // Returning JSX
    return (
        <div className={(props.className === undefined) ? `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden` : `md:rounded-2xl rounded-none border bg-slate-900/40 backdrop-blur-md border-slate-500/30 overflow-y-hidden ${props.className}`}>
            <TopSideComponent />
            <BottomSideComponent />
        </div>
    );
}
