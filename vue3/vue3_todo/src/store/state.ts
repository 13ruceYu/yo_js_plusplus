import { IState } from '@/typings';

export default <IState>{
  list: [],
};

/**
 * list: ITodo[]
 * ITodo
 * listItem: {
 *   id: new Date().getTime number,
 *   content: string,
 *   status: FINISHED | DOING | WILLDO -> enum
 * }
 * type 类型 interface 接口
 */
