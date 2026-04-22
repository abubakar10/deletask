import AuthTwoColumnLayout from '../components/auth/AuthTwoColumnLayout'
import AuthForm from '../components/auth/AuthForm'

function LoginPage() {
  return (
    <AuthTwoColumnLayout mode="login">
      <AuthForm mode="login" />
    </AuthTwoColumnLayout>
  )
}

export default LoginPage
