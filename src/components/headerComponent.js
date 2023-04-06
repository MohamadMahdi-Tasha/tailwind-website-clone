// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";
import ListLinkComponent from './chunks/listLinkComponent';
import ThemeChangerComponent from './chunks/themeChangerComponent';
import MobileHeaderDropdown from './chunks/mobileHeaderDropdown';

// Creating Functional Component And Exporting It As Defualt
export default function HeaderComponent() {
    // Returning JSX
    return (
        <header className='md:mb-[130px] mb-[80px] flex items-center justify-between'>
            <a href="#"><IconComponent type={'logo-typo'}/></a>
            <ul className={'flex items-center gap-6'}>
                <ListLinkComponent className={'md:block hidden'}>Docs</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Components</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Blog</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Showcase</ListLinkComponent>
                <li className={'md:block hidden'}><div className={'w-[10px] h-[23px] border-r-[1px] border-r-white/20'} /></li>
                <ThemeChangerComponent className={'relative md:block hidden'}/>
                <a className={'md:block hidden text-slate-400 hover:text-slate-300'} href={"https://www.github.com/MohamadMahdi-Tasha"}><IconComponent type={'github'}/></a>
                <li className={'md:hidden block'}><button className={'flex items-center justify-center w-[32px] h-[32px]'}><IconComponent type={'search'}/></button></li>
                <MobileHeaderDropdown />
            </ul>
        </header>
    );
}
