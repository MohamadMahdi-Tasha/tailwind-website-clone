// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import '../../assets/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({code, language, className}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => Prism.highlightAll());

    // Variables
    const linesOfCode = code.split(/\r\n|\r|\n/).length;

    // Returning JSX
    return (
        <div className={className}>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div>{[...Array(linesOfCode)].map((e, i) => <h6 key={i}>{i}</h6>)}</div>
                <div>
                    <pre>
                    <code className={`language-${language}`}>
                        {code}
                    </code>
                </pre>
                </div>
            </div>
        </div>
    );
}
