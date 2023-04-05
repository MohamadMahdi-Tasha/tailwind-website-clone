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
        <header className='md:mb-[100px] mb-[80px] flex items-center justify-between pt-5'>
            <a href="#"><IconComponent type={'logo-typo'}/></a>
            <ul className={'flex items-center gap-5'}>
                <ListLinkComponent className={'md:block hidden'}>Docs</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Components</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Blog</ListLinkComponent>
                <ListLinkComponent className={'md:block hidden'}>Showcase</ListLinkComponent>
                <li className={'md:block hidden'}><div className={'w-[10px] h-[20px] border-r-[1px] border-r-white/40'} /></li>
                <ThemeChangerComponent className={'relative md:block hidden'}/>
                <ListLinkComponent className={'md:block hidden'} link={"https://www.github.com/MohamadMahdi-Tasha"}><IconComponent type={'github'}/></ListLinkComponent>
                <li className={'md:hidden block'}><button className={'flex items-center justify-center w-[32px] h-[32px]'}><IconComponent type={'search'}/></button></li>
                <MobileHeaderDropdown />
            </ul>
        </header>
    );
}
