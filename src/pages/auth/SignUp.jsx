import AuthLayout from "./AuthLayout";

export default function SignUp() {
    return (
        <AuthLayout
            title="Sign"
            highlight="Up"
            subtitle="Create your account."
            submitText="Sign Up"
            footer={
                <div className="mt-4 space-y-3">

                    {/* Login link */}
                    <p className="text-sm text-white text-center">
                        Already have an account?{" "}
                        <a href="/signin" className="font-bold">
                            Sign In
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
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
                placeholder="Full Name"
            />

            <input
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
                placeholder="Email"
            />

            <input
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
                placeholder="Password"
                type="password"
            />

        </AuthLayout>
    );
}