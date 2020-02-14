import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/common/Footer';

const WritePage = () =>{
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - (우리회사)</title>
      </Helmet>
      <HeaderContainer />
      <EditorContainer />
      <WriteActionButtonsContainer />
      {/* <Footer /> */}
    </Responsive>
  );
};
export default WritePage;