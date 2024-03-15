import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routes/AppRouter";
import Layout from "./layouts/Layout";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div>
      <CookiesProvider>
      <Router>
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
      </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
