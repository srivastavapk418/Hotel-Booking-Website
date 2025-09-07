import { signInAction } from "../_lib/actions";

function SignInButton() {
  // using `server action` to redirect by clicking on the button, we can't do it just one using onClick prop on button as it is a server component and server component don't have interactivity. We can't make it a client component because we are calling the signInAction() from actions.js file.
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
