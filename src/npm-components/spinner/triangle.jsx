import { BallTriangle } from 'react-loader-spinner'


export const TriangleComponent = (props) => {
  return (
    <BallTriangle
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      {...props}
    />
  );
};


