
import Icon from '@ant-design/icons';
// import {
//     MdAutoAwesome,
//     MdHome
//   } from 'react-icons/md';
  import { AiOutlineHome, AiOutlineLayout, AiOutlineOpenAI, AiTwotoneEdit  } from "react-icons/ai";
  import { RiImageEditFill } from "react-icons/ri";

//   ChatArt AI MdAutoAwesome

export const asideRoutes: any = [
    {
      label: '首页',
      path: '/',
      icon: (<Icon component={AiOutlineHome} />),
    },
    {
      label: '模版',
      path: '/',
      icon: (<Icon component={AiOutlineLayout} />),
    },
    {
      label: 'AI 聊天',
      path: '/',
      icon: (<Icon component={AiOutlineOpenAI} />),
    },
    {
      label: 'AI 写作',
      path: '/',
      icon: (<Icon component={AiTwotoneEdit} />),
    },
    {
      label: 'AI 绘画',
      path: '/',
      icon: (<Icon component={RiImageEditFill} />),
    }
]