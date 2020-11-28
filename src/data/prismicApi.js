import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://lisa-dewaele-react-blog.prismic.io/api/v2';
const accessToken = 'MC5YOElkcGhBQUFDRUFBOEJn.77-977-9Fe-_vUjvv70t77-9R--_ve-_ve-_vSDvv73vv719du-_ve-_vW3vv70YQ--_ve-_ve-_ve-_vRPvv73vv70n77-9';

const Client = Prismic.client(apiEndpoint, { accessToken });

function getBlogPosts(cb){
    Client.query(
        Prismic.Predicates.at('document.type', "blog-post"),
        { orderings: '[my.blog-post.date desc]' }
    ).then(res => {
        cb(res.results)
    });

      
    
}

export default{
    getBlogPosts,
}