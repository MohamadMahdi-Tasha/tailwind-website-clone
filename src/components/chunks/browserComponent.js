// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./iconComponent";

// Creating Functional Component And Exporting It As Defualt
export default function BrowserComponent({children, className}) {
    // Returning JSX
    return(
        <div className={(className === undefined) ? 'bg-slate-800 md:rounded-2xl rounded-0 after:content-[""] after:absolute after:right-0 after:translate-x-[200%] after:translate-y-[-50%] after:top-[50%] after:w-[7px] after:cursor-e-resize after:h-[40px] after:rounded-3xl after:bg-slate-400 relative' : `relative bg-slate-800 md:rounded-2xl rounded-0 after:content-[''] after:absolute after:right-0 after:translate-x-[200%] after:translate-y-[-50%] after:top-[50%] after:w-[7px] after:cursor-e-resize after:h-[40px] after:rounded-3xl after:bg-slate-400 ${className}`}>
            <div className={'shadow-sm border-b border-slate-900 bg-slate-700 border-t-2 border-t-slate-500/30 md:rounded-t-2xl rounded-t-0'}>
                <div className={'p-3 flex items-center justify-between'}>
                    <div className={'flex gap-3 items-center'}>
                        <div className={'flex gap-2'}>
                            <div className={'w-2.5 h-2.5 rounded-full bg-red-400'}></div>
                            <div className={'w-2.5 h-2.5 rounded-full bg-yellow-400'}></div>
                            <div className={'w-2.5 h-2.5 rounded-full bg-green-400'}></div>
                        </div>
                        <div className={'md:flex hidden items-center'}>
                            <IconComponent type={'chevron-left'}/>
                            <IconComponent type={'chevron-right'}/>
                        </div>
                    </div>
                    <div className={'bg-slate-800 px-2 py-1.5 md:mx-0 mx-auto flex justify-center items-center w-[50%] rounded-md'}>
                        <h6 className={'flex items-center'}>
                            <IconComponent type={'lock'}/>
                            <span className={'ml-2 text-slate-500 text-xs'}>workcation.com</span>
                        </h6>
                    </div>
                    <div className={'md:block hidden'}><IconComponent type={'browser-resizable'}/></div>
                </div>
                <div className={'grid grid-cols-3'}>
                    <button className={'bg-slate-800 px-3 py-2 text-slate-500 border-t text-xs border-r rounded-tr-xl border-slate-900/60 flex items-center justify-center'}>
                        <IconComponent type={'logo-browser'}/>
                        <span className={'ml-2 truncate overflow-ellipsis'}>Tailwind UI - Official Tailwind CSS Components</span>
                    </button>
                    <button className={'px-3 py-2 text-slate-400 text-xs rounded-tr-xl flex items-center justify-center'}>
                        <IconComponent type={'workaction'}/>
                        <span className={'ml-2 truncate overflow-ellipsis'}>Workcation - Find a trip that suits you</span>
                    </button>
                    <button className={'bg-slate-800 px-3 py-2 text-slate-500 border-t text-xs border-l rounded-tl-xl border-slate-900/60 flex items-center justify-center'}>
                        <IconComponent type={'headless-ui'}/>
                        <span className={'ml-2 truncate overflow-ellipsis'}>Headless UI – Unstyled, fully accessible UI components</span>
                    </button>
                </div>
            </div>
            <div className={'md:h-auto h-[500px] overflow-auto'}>
                {children}
            </div>
        </div>
    );
}
