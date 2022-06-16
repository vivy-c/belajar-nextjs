import cookies from 'next-cookies';
import { resolveHref } from 'next/dist/shared/lib/router/router';

export function unauthPage(ctx){
    return new Promise(resolve => {
        const allCookies = cookies(ctx);

        //console.log(allCookies.token);
        if(allCookies.token)
            return ctx.res.writeHead(302, {
                Location: '/posts'
            }).end();

         return resolve('unauthorized');
    });
}