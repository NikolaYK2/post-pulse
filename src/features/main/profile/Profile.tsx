import s from './Profile.module.scss'
import {Form, FormDataType} from "@/features/main/profile/Form.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {DecorativeBackground} from "@/common/components/ui/decorativeBackground/DecorativeBackground.tsx";
import circle from "@/assets/image/profile/circle.jpg";
import square from "@/assets/image/profile/square.jpg";
import triangle from "@/assets/image/profile/triangle.jpg";
import {ChangeEvent, useState} from "react";
import {HTMLElementType} from "@/common/components/ui/Input/Input.tsx";
import {GetPostsType} from "@/features/main/posts/api/postsApi.ts";

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

  const formPosts: FormDataType[] = [
    {
      title: 'Post title',
      value: post.title,
      as: 'input',
      type: 'text',
      fn: addTitleHandle,
    },

    {
      title: 'Post Description',
      value: post.body,
      as: 'textarea',
      type: 'text',
      fn: addDescriptionHandle,
    }
  ]

  return (
    <section className={s.container}>
      <div className={`containerApp ${s.block}`}>
        <DecorativeBackground svgProps={[{name: 'dots'}, {name: 'wave'}]} imageProps={[circle, square, triangle]}/>

        <Form dataForm={formPosts} callback={addPostHandle}/>
      </div>
    </section>
  );
};






