import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, post, postError, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, bno: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { bno } = post;
      history.push(`/posts/${bno}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);