// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";
import ListLinkComponent from './chunks/listLinkComponent';
import ThemeChangerComponent from './chunks/themeChangerComponent';

// Creating Functional Component And Exporting It As Defualt
export default function HeaderComponent() {
    // Returning JSX
    return (
        <header className='mb-[99px] flex items-center justify-between'>
            <a href="#"><IconComponent type={'logo-typo'}/></a>
            <ul className={'flex items-center gap-5'}>
                <ListLinkComponent>Docs</ListLinkComponent>
                <ListLinkComponent>Components</ListLinkComponent>
                <ListLinkComponent>Blog</ListLinkComponent>
                <ListLinkComponent>Showcase</ListLinkComponent>
                <li><div className={'w-[10px] h-[20px] border-r-[1px] border-r-white/40'} /></li>
                <li className={'relative'}><ThemeChangerComponent /></li>
                <ListLinkComponent
                    link={"https://www.github.com/MohamadMahdi-Tasha"} >
                    <IconComponent type={'github'}/>
                </ListLinkComponent>
            </ul>
        </header>
    );
}
