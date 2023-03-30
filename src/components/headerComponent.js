// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";
import ContainerComponent from './chunks/containerComponent';
import ListLinkComponent from './chunks/listLinkComponent';
import ThemeChangerComponent from './chunks/themeChangerComponent';

// Creating Functional Component And Exporting It As Defualt
export default function HeaderComponent() {
    // Returning JSX
    return (
        <header>
            <ContainerComponent>
                <a href="#"><IconComponent type={'logo-typo'}/></a>
                <ul>
                    <ListLinkComponent>Docs</ListLinkComponent>
                    <ListLinkComponent>Components</ListLinkComponent>
                    <ListLinkComponent>Blog</ListLinkComponent>
                    <ListLinkComponent>Showcase</ListLinkComponent>
                    <li><div /></li>
                    <li><ThemeChangerComponent /></li>
                    <ListLinkComponent
                        link={"https://www.github.com/MohamadMahdi-Tasha"} >
                        <IconComponent type={'github'}/>
                    </ListLinkComponent>
                </ul>
            </ContainerComponent>
        </header>
    );
}
