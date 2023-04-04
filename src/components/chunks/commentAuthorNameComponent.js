// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function CommentAuthorNameComponent({isCentred, name, img, job}) {
    // Returning JSX
    return (
        <div className={(isCentred) ? 'flex items-center justify-center' : 'flex items-center'}>
            <div className={`w-12 h-12 mr-3 rounded-full ${img}`}></div>
            <div className={'text-left'}>
                <h4 className={'text-md text-white font-bold'}>{name}</h4>
                <h6 className={'text-md text-slate-500 font-medium'}>{job}</h6>
            </div>
        </div>
    );
}
