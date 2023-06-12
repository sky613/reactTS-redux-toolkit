import { listMgt } from './mock/listMgt';

const Login = ({ http }) => ({
  postLogin: ({ params, config }) => new Promise((resolve) => {
    setTimeout(() => resolve(listMgt), 1000);
  }),

});

export default Login;
