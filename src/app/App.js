import PageNotFound from 'common/components/404';
import Footer from 'common/components/Footer';
import Header from 'common/components/Header';
import { fetchThongTinTaiKhoanAction } from 'features/authentication/action';
import Login from 'features/authentication/pages/Login';
import Profile from 'features/authentication/pages/Profile';
import Register from 'features/authentication/pages/Register';
import Blog from 'features/elearning/pages/Blog';
import Courses from 'features/elearning/pages/Courses';
import Detail from 'features/elearning/pages/Detail';
import Event from 'features/elearning/pages/Event';
import Home from 'features/elearning/pages/Home';
import Info from 'features/elearning/pages/Info';
import RegisterCourse from 'features/elearning/pages/RegisterCourse';
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
export const history = createBrowserHistory();
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThongTinTaiKhoanAction);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path='/'
          component={Home}
          exact
        />
        <Route
          path='/course'
          component={Courses}
        />

        <Route
          path='/detail/:id'
          component={Detail}
        />
        <Route
          path='/blog'
          component={Blog}
        />
        <Route
          path='/event'
          component={Event}
        />
        <Route
          path='/info'
          component={Info}
        />

        <Route
          path='/login'
          component={Login}
        />
        <Route
          path='/register'
          component={Register}
        />
        <Route
          path='/profile'
          component={Profile}
        />
        <Route
          path='/register-course'
          component={RegisterCourse}
        />
        <Route
          path='*'
          component={PageNotFound}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
