import noPostsImg from "@/assets/image/posts/no posts.png";
import s from './EmptyState.module.scss'

type Props = {
  title: string
}
export const EmptyState = ({title}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={noPostsImg} alt=""/>
      </div>
      {title}
    </div>);
};
