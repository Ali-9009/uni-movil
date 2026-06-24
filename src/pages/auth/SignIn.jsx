import AuthLayout from "./AuthLayout";

export default function SignIn() {
    return (
        <AuthLayout
            title="Sign"
            highlight="In"
            subtitle="Glad you're back."
            submitText="Sign In"
            footer={
                <div className="mt-4 space-y-3">

                    <p className="text-sm text-white text-center">
                        Don’t have an account?{" "}
                        <a href="/signup" className="font-bold">
                            Sign Up
                        </a>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                        <div className="h-px flex-1 bg-white/30"></div>
                        <span>Or continue with</span>
                        <div className="h-px flex-1 bg-white/30"></div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4">

                        {/* Google */}
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-(--primary-color) hover:text-white transition"
                        >
                            <i className="ri-google-fill text-lg"></i>
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-(--primary-color) hover:text-white transition"
                        >
                            <i className="ri-facebook-fill text-lg"></i>
                        </a>

                        {/* GitHub */}
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-(--primary-color) hover:text-white transition"
                        >
                            <i className="ri-github-fill text-lg"></i>
                        </a>

                    </div>
                </div>
            }
        >
            {/* Inputs */}
            <input
                type="text"
                placeholder="Username"
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
            />

            <input
                type="password"
                placeholder="Password"
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
            />

            <label className="flex gap-2 text-white text-sm">
                <input type="checkbox" />
                Remember me
            </label>

            <a href="/forgot" className="text-white text-sm text-center">
                Forgot password?
            </a>
        </AuthLayout>
    );
}