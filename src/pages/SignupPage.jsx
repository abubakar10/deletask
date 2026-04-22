import AuthTwoColumnLayout from '../components/auth/AuthTwoColumnLayout'
import AuthForm from '../components/auth/AuthForm'

function SignupPage() {
  return (
    <AuthTwoColumnLayout mode="signup">
      <AuthForm mode="signup" />
    </AuthTwoColumnLayout>
  )
}

export default SignupPage
