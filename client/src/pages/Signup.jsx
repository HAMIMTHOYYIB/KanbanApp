import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center w-full my-10 border-4">
      <form className="flex w-6/12 max-w-lg flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="example@123.com"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit">Submit</Button>
          <Link 
            className="text-teal-500 hover:text-teal-700 hover:translate-x-1 transition duration-300" 
            to={"/signin"}
          >
            Have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
