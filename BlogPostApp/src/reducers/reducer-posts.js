import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const { data } = action.payload;
      return data.reduce((result, item) => Object.assign(result, {
        [item.id]: item
      }), {});

    default:
      return state;
  }

}
