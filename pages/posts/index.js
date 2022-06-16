import { authPage } from "../../middlewares/authorizationPage";

export async function getServerSideProps(ctx){
    const auth = await authPage(ctx);
    console.log(auth);
    return { props : {}}
}
export default function PostIndex(){
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}