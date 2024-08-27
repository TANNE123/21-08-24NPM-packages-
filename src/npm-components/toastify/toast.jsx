import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast=()=>{
  const notify = () => toast("Clicked the button");

  return (
    <div>
      <button onClick={notify}>Click me</button>
      <ToastContainer />
    </div>
  );
}