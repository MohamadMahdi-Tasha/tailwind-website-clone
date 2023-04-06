// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";

// Creating Functional Component And Exporting It As Defualt

export default function FeaturesComponent({img, color ,borderColor , title, subtitle, children, type}) {
    // Returning JSX
    return(
        <div className='md:w-[70%] w-full md:mt-[127px] mt-[50px] mb-10'>
            <img className={`border-[3px] h-16 h-16 mb-6 ${borderColor} rounded-full`} src={img} alt={title}/>
            <h6 className={`${color} font-bold text-lg mb-3`}>{title}</h6>
            <h1 className={'text-white font-bold text-4xl mb-5'}>{subtitle}</h1>
            <p className={'text-slate-500 font-medium mb-8'}>{children}</p>
            <a href="#"><button className='bg-slate-700 rounded-3xl px-4 py-2 font-bold text-[12px] text-white hover:bg-slate-600' tabIndex={'-1'}>Learn More ></button></a>
            <div className={'mt-9 md:w-[60%] w-[70%] flex gap-10 justify-around'}>
                <button className={'flex flex-col gap-5 items-center justify-center text-sm text-slate-500 hover:text-slate-400'}><IconComponent type={'sizing'} />Sizing</button>
                <button className={'flex flex-col gap-5 items-center justify-center text-sm text-slate-500 hover:text-slate-400'}><IconComponent type={'colors'} />Colors</button>
                <button className={'flex flex-col gap-5 items-center justify-center text-sm text-slate-500 hover:text-slate-400'}><IconComponent type={'typography'} />Typography</button>
                <button className={'flex flex-col gap-5 items-center justify-center text-sm text-slate-500 hover:text-slate-400'}><IconComponent type={'shadows'} />Shadows</button>
            </div>
        </div>
    );
}