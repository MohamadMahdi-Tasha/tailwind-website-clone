// Codes By Mahdi Tasha
// Importing Part
import CommentAuthorNameComponent from "./commentAuthorNameComponent";

// Creating Functional Component And Exporting It As Defualt
export default function CommentComponent({name, job, children}) {
    // Returning JSX
    return (
        <li>
            <a className='block bg-slate-800 border-t border-t-slate-100/10 rounded-xl p-5' href="#">
                <CommentAuthorNameComponent img={'bg-purple-700'} job={job} name={name}/>
                <p className={'mt-8 text-slate-500'}>{children}</p>
            </a>
        </li>
    );
}
