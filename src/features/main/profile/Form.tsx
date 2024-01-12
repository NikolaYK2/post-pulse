import s from './Form.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {H2} from "@/common/components/ui/h2/H2.tsx";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";


type CommonFields = {
  id: string;
  title: string;
  description: string;
  data: string
};

type Props<T extends CommonFields> = {
  posts: T[],
  setPosts: Dispatch<SetStateAction<T[]>>;
}
export const Form = <T extends CommonFields>({posts, setPosts}: Props<T>) => {
  const [post, setPost] = useState({title: '', description: ''})

  const uniqueId = `${Date.now()}-${Math.random()}`;

  const addTitleHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({...post, title: e.currentTarget.value})
  }
  const addDescriptionHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPost({...post, description: e.currentTarget.value})
  }

  const addPostHandle = () => {
    setPosts([...posts, {...post, id: uniqueId, data: Date + ''} as T])
    setPost({title: '', description: ''})
  }


  return (
    <div className={s.container} onSubmit={event => event.preventDefault()}>
      <H2 title={'Provide reliable news'} side={'left'}/>
      <form className={s.form}>
        <label className={s.input}>
          <span>Post title</span>
          <input type="text" value={post.title} onChange={addTitleHandle}/>
        </label>
        <label className={s.textarea}>
          <span>Post Description</span>
          <textarea value={post.description} onChange={addDescriptionHandle}/>
        </label>
        <BtnPoly variant={'primary'} onClick={addPostHandle}>Add Post</BtnPoly>
      </form>
    </div>
  );
};

