import s from './Profile.module.scss'
import circle from '@/assets/image/profile/circle.jpg'
import square from '@/assets/image/profile/square.jpg'
import triangle from '@/assets/image/profile/triangle.jpg'
import {createRef, useLayoutEffect} from "react";
import {Form} from "@/features/main/profile/Form.tsx";
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";


export const Profile = () => {

  const images = [{id: 0, name: circle}, {id: 1, name: square}, {id: 2, name: triangle}]
  const svg = ['dots', 'wave'] as const
  const imgRefs = images.map(() => createRef<HTMLImageElement>())

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      imgRefs.forEach((el) => el.current?.classList.add(s.imgActive))
    })
  }, [])

  const {posts, setPosts}= usePosts()

  return (
    <section className={s.container}>
      <div className={`containerApp ${s.block}`}>
        <div className={s.decoratorBc}>
          {images.map((img, index) => <img key={img.id} src={img.name} alt="img" ref={imgRefs[index]}/>)}
          {svg.map((svg) => <div key={svg} className={s.svg}><IconSvg name={svg}/></div>)}
        </div>
        <Form<PostsType> posts={posts} setPosts={setPosts}/>
      </div>
    </section>
  );
};

