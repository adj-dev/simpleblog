import posts from '../api/posts';
import history from '../history';

export const createPost = formValues => async dispatch => {
  const response = await posts.post('/posts', formValues);

  dispatch({ type: 'CREATE_POST', payload: response.data });
  history.push('/posts');
};

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchPost = id => async dispatch => {
  const response = await posts.get(`/posts/${id}`);

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);

  dispatch({ type: 'EDIT_POST', payload: response.data });
  history.push('/posts');
};

export const deletePost = id => async dispatch => {
  await posts.delete(`/posts/${id}`);

  dispatch({ type: 'DELETE_POST', payload: id });
  history.push('/posts');
};
