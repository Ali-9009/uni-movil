import AuthLayout from "./AuthLayout";

export default function ResetPassword() {
    return (
        <AuthLayout
            title="New"
            highlight="Password"
            subtitle="Enter your new password."
            submitText="Reset Password"
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
                type="password"
                placeholder="New Password"
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
            />

            <input
                type="password"
                placeholder="Confirm Password"
                className="py-2 px-3 text-white placeholder:text-white border border-white rounded-md"
            />
        </AuthLayout>
    );
}