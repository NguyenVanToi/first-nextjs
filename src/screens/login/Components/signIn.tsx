import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { LoginForm } from "../propState";
import { useAppDispatch } from "../../../app/hooks";
import { signInAction } from "../loginSlice";

function SignInComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    toast("lốt đinh đã");
    dispatch(signInAction({ ...data }));
  });
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={onSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="https://fb.com" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://fb.com" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="https://fb.com" className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        <input
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Điền cái email vào" },
          })}
        />
        <span>{errors.email?.message}</span>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Mỗi cái mật khẩu mà còn điền thiếu",
            },
            minLength: { value: 6, message: "Điền lại, điền vớ vẩn 6 kí tự" },
          })}
        />
        <span>{errors.password?.message}</span>
        <a href="https://fb.com">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInComponent;
