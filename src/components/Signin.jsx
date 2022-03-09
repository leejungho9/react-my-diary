
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Signin.module.css';
import { useRef } from 'react';
import { Button, Form, Input } from 'antd';




const SigninForm = ({login}) => {
  const eamilRef = useRef(null);
  const passwordRef = useRef(null);

  
  return (
    <div className={styles.container}>
      <Form
        name="normal_login"
        className={styles.login_form}
        initialValues={{
          remember: true,
        }}
        >
        <div className={styles.signin_title}>My Books</div>
        <hr className={styles.signin_underline}></hr>
      <img src="/bg_signin.png" alt="img" className={styles.signin_bg}/>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className={styles.site_form_item_icon} />} placeholder="Username" ref={eamilRef} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
          ]}
        >
      
          <Input
            prefix={<LockOutlined className={styles.site_form_item_icon} />}
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />

        </Form.Item>
        <Form.Item>
          <Button type="secondary" htmlType="submit" className={styles.login_form_button} onClick={click}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  function click() {
    const email = eamilRef.current.input.value;
    const password = passwordRef.current.input.value;
    login({email, password});

  }
};
export default SigninForm;