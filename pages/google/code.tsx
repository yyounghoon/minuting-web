import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { postLogin } from '../../lib/api/user';

function Code() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const loginCall = async () => {
        try {
          const { accessToken, refreshToken } = await postLogin(code as string);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          router.replace('/');
        } catch (e) {
          console.error('로그인 실패');
        }
      };
      loginCall();
    }
  }, [router.query]);

  return <h1>code</h1>;
}

export default Code;
