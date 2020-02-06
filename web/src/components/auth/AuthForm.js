import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { makeStyles, Typography } from '@material-ui/core';
import {blue, green} from '@material-ui/core/colors'
import { AccountCircle, VpnKey, Email, Explore} from "@material-ui/icons"
import Icon from '@material-ui/core/Icon'
// 스타일링 된 input
const StyledInput = styled.input`
    font-size:1rem;
    border: none;
    norder-bottom: 1px solid ${palette.gray[5]};
    padding-bottom : 0.5rem;
    outline:none;
    width: 100%;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
        
    }
`;
const Footer = styled.div`
    margin-top:2rem;
    text-align:right;
    {
        color:${palette.gray[6]};
        text-decoration:underline;
        &:hover {
            color:${palette.gray[9]}
        }
    }
`
const textmap={
    login: '로그인',
    register: '회원가입',
};

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
    
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const useStyles = makeStyles(theme => ({
    quote: {
        backgroundImage: 'url(/cow/auth.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    root:{
        height: '100%'
    },
    grid:{
        height:'100%'
    },
    contentBody: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
          },
        flexGrow: 1,
        display: 'flex',    
        alignItems: 'center',
        width:'500px'
        
    },
    footer: {
        backgroundColor: blue[50]
    },
    container:{
        flex : '1',
        flexDiretion : 'row'
    },

    
 }))

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const classes = useStyles();
    const text = textmap[type];
    return (
            <div className={classes.contentBody}>
                <form 
                    onSubmit={onSubmit}
                >
                    <h3>{text}</h3>
                    

                        <AccountCircle
                            style={{color:blue[300]}}
                        />
                        <StyledInput 
                            autoComplete="username" 
                            name="username" 
                            placeholder= '아이디'
                            onChange={onChange}
                            value={form.username}
                        />
                        <VpnKey
                            style= {{color:green[500]}}
                        />
                        <StyledInput 
                            autoComplete="new-password" 
                            name="password" 
                            placeholder="비밀번호" 
                            type="password"
                            onChange={onChange}
                            value={form.password}
                        />
                        
           
                        {type === 'register' && (
                          
                        <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                        />
                        )}
                        
                        {type === 'register' && (
                            
                          <StyledInput
                            autoComplete="name"
                            name="fullName"
                            placeholder="이름"
                            onChange={onChange}
                            value={form.fullName}
                          />
                        )}
                        
                        {type === 'register' && (
                    
                          <StyledInput
                            autoComplete="email"
                            name="email"
                            placeholder="이메일"
                            type="email"
                            onChange={onChange}
                            value={form.email}
                          />
                        )}
                        {type === 'register' && (
                          <StyledInput
                            autoComplete="location"
                            name="location"
                            placeholder="위치"
                            onChange={onChange}
                            value={form.location}
                          />
                        )}
                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <ButtonWithMarginTop 
                        cyan 
                        fullWidth
                        // width = '100%' 
                        style={{marginTop: '1rem'}}>
                            {text}
                        </ButtonWithMarginTop>
                        <Footer>
                            {type === 'login' ? (   
                                <Typography
                                    variant="h6"
                                >
                                 <Link to='/register'>Go to Signup  </Link>
                                </Typography>
                            ) : (
                                <Typography
                                    variant='h6'
                                >
                                <Link to='/login' >Go to Signin  </Link>
                                </Typography>
                            )}
                        </Footer>
                    </form>
                      
            </div>
    );
};

export default AuthForm;
