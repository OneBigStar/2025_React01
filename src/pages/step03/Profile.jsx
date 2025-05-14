import Avatar from "./Avatar";

export default function Profile(props){
    return(
        <ul>
            {/* person 객체 */}
            <li><Avatar size={100} person={{name:'hong', imageId:'YfeOqp2'}} /></li>
            <li><Avatar size={80} person={{name:'han', imageId:'OKS67lh'}}/></li>
            <li><Avatar size={60} person={{name:'park', imageId:'1bX5QH6'}}/></li>
        </ul>
    );
}