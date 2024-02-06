import s from './Profile.module.scss'
import {Form} from "@/common/components/ui/form/ui/Form.tsx";
import {usePosts} from "@/app/postRpovider/lib/usePosts.tsx";
import {DecorativeBackground} from "@/common/components/ui/decorativeBackground/DecorativeBackground.tsx";
import circle from "@/assets/image/profile/circle.jpg";
import square from "@/assets/image/profile/square.jpg";
import triangle from "@/assets/image/profile/triangle.jpg";
import {ChangeEvent, useState} from "react";
import {HTMLElementType, PropsFormType} from "@/common/components/ui/Input/Input.tsx";
import {GetPostsType} from "@/features/2-main/posts/api/postsApi.ts";

export const Profile = () => {
  const {posts, setPosts} = usePosts()

  const [post, setPost] = useState<GetPostsType>({title: '', body: '', userId: 0, id: 0})

  const uniqueId = Date.now() + Math.random();

  const addTitleHandle = (e: ChangeEvent<HTMLElementType>) => {
    setPost({...post, title: e.currentTarget.value})
  }
  const addDescriptionHandle = (e: ChangeEvent<HTMLElementType>) => {
    setPost({...post, body: e.currentTarget.value})
  }

  const addPostHandle = () => {
    setPosts([...posts, {...post, id: uniqueId, userId: uniqueId}])
    setPost({title: '', body: '', userId: 0, id: 0})
  }

  const formPosts: PropsFormType[] = [
    {
      title: 'Post title',
      type: 'text',
      value: post.title,
      onChange: addTitleHandle,
    },

    {
      title: 'Post Description',
      type: 'textarea',
      value: post.body,
      onChange: addDescriptionHandle,
    },
    {
      title: 'Add Post',
      onClick: addPostHandle,
    }
  ]

  return (
    <section className={s.container}>
      <div className={`containerApp ${s.block}`}>
        <DecorativeBackground svgProps={[{name: 'dots'}, {name: 'wave'}]} imageProps={[circle, square, triangle]}/>

        <Form title={'Provide reliable news'} dataForm={formPosts}/>
      </div>
    </section>
  );
};






