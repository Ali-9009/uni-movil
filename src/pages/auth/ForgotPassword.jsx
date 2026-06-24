import AuthLayout from "./AuthLayout";

export default function ForgotPassword() {
    return (
        <AuthLayout
            title="Forgot"
            highlight="Password"
            subtitle="We will send reset link."
            submitText="Send Link"
            footer={
                <p className="text-sm text-white text-center mt-3">
                    Back to{" "}
                    <a href="/signin" className="font-bold">
                        Sign In
                    </a>
                </p>
            }
        >
            <input
                type="email"
                placeholder="Enter Email"
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
            />
        </AuthLayout>
    );
}