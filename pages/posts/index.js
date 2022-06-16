import { authPage } from "../../middlewares/authorizationPage";

export async function getServerSideProps(ctx){
    const { token } = await authPage(ctx);
    console.log(token);
    return { props : {}}
}
export default function PostIndex(){
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}