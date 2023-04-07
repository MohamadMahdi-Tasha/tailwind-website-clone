// Codes BY Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import '../../assets/css/prismTheme.css';
import LineNumbersFunction from "../../assets/js/prsimLineNumber";
import IconComponent from "./iconComponent";

// Variables
const htmlCode = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/build.css">
    </head>
    <body>
        <button class="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400"></button>
    </body>
</html>`
const terminalCode = `Rebuilding... Done in 5ms.
Rebuilding... Done in 5ms.
Rebuilding... Done in 3ms.
Rebuilding... Done in 7ms.
Rebuilding... Done in 4ms.
Rebuilding... Done in 5ms.
Rebuilding... Done in 5ms.`
const cssCode = `.flex {
  display: flex
}

.items-center {
  align-items: center
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity))
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity))
}

.hover\\:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity))
}`

// Creating Functional Component And Exporting It As Defualt
export default function HtmlCssTerminalCodeComponent() {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return(
        <div className={'md:flex md:static absolute top-0 left-0 md:w-full w-[100vw] block md:rounded-2xl rounded-0 border backdrop-blur-md border-slate-500/30 overflow-hidden'}>
            <div className={'md:w-[50%] w-full'}>
                <div className={'border-b border-b-slate-500/30'}>
                    <div className={'mt-2 w-full overflow-auto flex'}>
                        <button className={'py-2 border-b border-b-cyan-500 px-4 text-xs text-cyan-500 flex items-center justify-between'}><span className={'mr-4'}>index.html</span> <IconComponent width={'7px'} height={'7px'} type={'x'}/></button>
                        <div className={'border overflow-hidden border-slate-500/30 flex justify-between items-center bg-slate-600/10 w-full rounded-tl-md rounded-tr-md'}>
                            <div className={'flex items-center'}>
                                <button className={'py-2 px-4 text-xs text-slate-500 border-r border-r-slate-500/30'}>tailwind.config.js</button>
                                <button className={'py-2 px-4 text-xs text-slate-500 italic border-r border-r-slate-500/30'}>package.json</button>
                            </div>
                            <div className={'flex items-center'}>
                                <button className={'w-[40px] h-[30px] text-slate-500 flex items-center justify-center'}><IconComponent type={'side-code'}/></button>
                                <button className={'w-[40px] h-[30px] text-slate-500 flex items-center justify-center'}><IconComponent type={'horizontal-dots'}/></button>
                            </div>
                        </div>
                    </div>
                    <pre>
                        <code className={`line-numbers language-html`}>
                            {htmlCode}
                        </code>
                    </pre>
                </div>
                <div>
                    <div className={'mt-2 w-full overflow-auto flex'}>
                        <button className={'py-2 border-b border-b-cyan-500 px-4 text-xs text-cyan-500 flex items-center justify-between'}>Terminal</button>
                        <div className={'border-l border-b border-t overflow-hidden border-slate-500/30 flex justify-between items-center bg-slate-600/10 w-full rounded-tl-md'}>
                            <div className={'flex items-center'}></div>
                            <div className={'flex items-center'}><button className={'w-[40px] h-[30px] text-slate-500 flex items-center justify-center'}><IconComponent type={'horizontal-dots'}/></button></div>
                        </div>
                    </div>
                    <pre className={'px-4 md:h-[150px] h-auto'}><code className={`language-`}>{terminalCode}</code></pre>
                </div>
            </div>
            <div className={'md:w-[50%] w-full'}>
                <div className={'mt-2 w-full overflow-auto flex'}>
                    <button className={'py-2 border-b border-b-cyan-500 px-4 text-xs text-cyan-500 flex items-center justify-between'}><span className={'mr-4'}>build.css</span> <IconComponent width={'7px'} height={'7px'} type={'x'}/></button>
                    <div className={'border-l border-b border-t overflow-hidden border-slate-500/30 flex justify-between items-center bg-slate-600/10 w-full rounded-tl-md'}>
                        <div className={'flex items-center'}></div>
                        <div className={'flex items-center'}><button className={'w-[40px] h-[30px] text-slate-500 flex items-center justify-center'}><IconComponent type={'horizontal-dots'}/></button></div>
                    </div>
                </div>
                <pre className={'md:h-[527px] h-auto border-l border-l-slate-500/30'}><code className={`line-numbers language-css`}>{cssCode}</code></pre>
            </div>
        </div>
    );
}