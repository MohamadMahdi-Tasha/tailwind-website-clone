// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function MediaQuerysComponent({sizeName,isSelected,fromLeft}) {
    // Returning JSX
    return(
        <div data-selected={isSelected}
             className={`absolute bottom-[-5px] flex flex-col items-center justify-center left-[${fromLeft}px] group`}>
            <div className={'bg-slate-800 group-data-[selected=true]:bg-indigo-500 text-slate-500 group-data-[selected=true]:text-white border-t-2 font-mono border-t-slate-500/30 group-data-[selected=true]:border-t-indigo-400/30 w-[25px] h-[25px] flex justify-center items-center text-xs rounded-md absolute left-[15px] top-0'}>
                {sizeName}
            </div>
            <div className={'w-[1px] h-[50px] bg-slate-500/30 group-data-[selected=true]:bg-indigo-500 mb-1'}></div>
            <div className={'border-2 bg-slate-900 border-slate-500/30 group-data-[selected=true]:border-indigo-500 rounded-full w-[10px] h-[10px]'}></div>
        </div>
    );
}