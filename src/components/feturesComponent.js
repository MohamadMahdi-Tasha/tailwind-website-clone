// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";

// Creating Functional Component And Exporting It As Defualt

export default function FeaturesComponent({img, color ,borderColor, title, subtitle, children, cta, hasNoButtons}) {
    // Some Inner Components
    function SelectableButtonComponent({type, isSelected}) {
        // Returning JSX
        return(
            <button
                className={(isSelected) ? `flex flex-col gap-5 items-center justify-center text-sm ${color}` : 'flex flex-col gap-5 items-center justify-center text-sm text-slate-500 hover:text-slate-400'}>
                <IconComponent type={type} />
                {type.charAt(0).toUpperCase()}
                {type.slice(1, type.length)}
            </button>
        );
    }

    function SelectableButtonsHolder() {
        // Conditional Rendering
        if (title === 'Constraint-based') {
            return (
                <>

                    <SelectableButtonComponent isSelected type={'sizing'} />
                    <SelectableButtonComponent isSelected={false} type={'colors'} />
                    <SelectableButtonComponent isSelected={false} type={'typography'} />
                    <SelectableButtonComponent isSelected={false} type={'shadows'} />
                </>
            );
        } else if (title === 'Build anything' || title === 'Customization') {
            return (
                <>
                    <SelectableButtonComponent isSelected type={'simple'}/>
                    <SelectableButtonComponent isSelected={false} type={'playful'}/>
                    <SelectableButtonComponent isSelected={false} type={'elegant'}/>
                    <SelectableButtonComponent isSelected={false} type={'brutalist'}/>
                </>
            );
        } else if (title === 'Component-driven') {
            return (
                <>
                    <SelectableButtonComponent isSelected type={'react'}/>
                    <SelectableButtonComponent isSelected={false} type={'vue'}/>
                    <SelectableButtonComponent isSelected={false} type={'angular'}/>
                    <SelectableButtonComponent isSelected={false} type={'blade'}/>
                </>
            );
        } else if (title === 'Modern features') {
            return (
                <>
                    <SelectableButtonComponent isSelected type={'grid'}/>
                    <SelectableButtonComponent isSelected={false} type={'transform'}/>
                    <SelectableButtonComponent isSelected={false} type={'filter'}/>
                </>
            );
        }
    }

    // Returning JSX
    return(
        <div className='md:w-[70%] w-full md:mt-[127px] mt-[50px] mb-10'>
            <img className={`border-[3px] h-16 h-16 mb-6 ${borderColor} rounded-full`} src={img} alt={title}/>
            <h6 className={`${color} font-bold text-lg mb-3`}>{title}</h6>
            <h1 className={'text-white font-bold text-4xl mb-5'}>{subtitle}</h1>
            <p className={'text-slate-500 font-medium mb-8'}>{children}</p>
            <a href="#"><button className='bg-slate-700 rounded-3xl px-4 py-2 font-bold text-[12px] text-white hover:bg-slate-600 flex items-center' tabIndex={'-1'}><span className={'mr-2'}>{cta}</span> <IconComponent type={'chevron-right'}/></button></a>
            {(!hasNoButtons) ? <div className={'mt-9 md:w-[60%] w-[70%] flex gap-10 justify-around'}><SelectableButtonsHolder /></div> : false}
        </div>
    );
}