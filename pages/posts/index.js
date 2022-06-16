import { authPage } from "../../middlewares/authorizationPage";

export async function getServerSideProps(ctx){
    const { token } = await authPage(ctx);
    //console.log(token);

    const postReq = await fetch('http://localhost:3000/api/posts', {
        headers : {
            'Authorization' : 'Bearer ' + token
        }
    });

    const posts = await postReq.json();

    return {
        props: {
            posts : posts.data
        }
    }
}
export default function PostIndex(props){
    console.log(props);
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}