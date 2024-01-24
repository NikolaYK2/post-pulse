import s from './Profile.module.scss'
import {Form} from "@/features/main/profile/Form.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {DecorativeBackground} from "@/common/components/ui/decorativeBackground/DecorativeBackground.tsx";
import circle from "@/assets/image/profile/circle.jpg";
import square from "@/assets/image/profile/square.jpg";
import triangle from "@/assets/image/profile/triangle.jpg";


export const Profile = () => {
  const {posts, setPosts} = usePosts()

  return (
    <section className={s.container}>
      <div className={`containerApp ${s.block}`}>
        <DecorativeBackground svgProps={[{name: 'dots'}, {name: 'wave'}]} imageProps={[circle, square, triangle]}/>

        <Form<PostsType> posts={posts} setPosts={setPosts}/>
      </div>
    </section>
  );
};

