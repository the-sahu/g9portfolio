import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Testimonials from "./screens/TestimonialAdminScreen";
import NewsScreen from "./screens/NewsScreen";
import PartnerScreen from "./screens/PartnerScreen";
import CollaboratorScreen from "./screens/CollaboratorScreen";
import TestimonialEditScreen from "./screens/TestimonialEditScreen";
// import BlogEditScreen from "./screens/BlogEditScreen";
import CareerScreen from "./screens/CarrerScreen";
import CareerEditScreen from "./screens/CareerEditScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import HeroScreen from "./screens/HeroScreen";
import HeroCreateScreen from "./screens/HeroCreateScreen";
import HeroEditScreen from "./screens/HeroEditScreen";
import TeamScreen from "./screens/TeamScreen";
import TeamCreateScreen from "./screens/TeamCreateScreen";
import TeamEditScreen from "./screens/TeamEditScreen";
import SuperstarDonarScreen from "./screens/SuperstarDonarScreen";
import SuperstarDonarCreateScreen from "./screens/SuperstarDonarCreateScreen";
import SuperstarDonarEditScreen from "./screens/SuperstarDonarEditScreen";
import AboutScreen from "./screens/AboutScreen";
import TestimonialScreen from "./screens/TestimonialScreen";
import Performance from "./screens/Performance";
import Charges from "./screens/Charges";

const defaultScreens = () => (
  <>
    <Header />
    <Route path="/" component={HomeScreen} exact />
    <Route path="/about" component={AboutScreen} exact />
    <Route path="/performance" component={Performance} exact />
    <Route path="/charges" component={Charges} exact />
    <Route path="/testimonials" component={TestimonialScreen} exact />
    <Route path="/testimonials/create" component={TestimonialEditScreen} />
    <Route path="/testimonials/:id/edit/" component={TestimonialEditScreen} />
    <Route path="/homeSlider" component={HeroScreen} exact />
    <Route path="/homeSlider/create/" component={HeroCreateScreen} exact />
    <Route path="/homeSlider/:id/edit/" component={HeroEditScreen} exact />
    <Route path="/team" component={TeamScreen} exact />
    <Route path="/team/create/" component={TeamCreateScreen} exact />
    <Route path="/team/:id/edit/" component={TeamEditScreen} exact />
    <Route path="/superstarDonor" component={SuperstarDonarScreen} exact />
    <Route
      path="/superstarDonor/create/"
      component={SuperstarDonarCreateScreen}
      exact
    />
    <Route
      path="/superstarDonor/:id/edit/"
      component={SuperstarDonarEditScreen}
      exact
    />
    {/* <Route path="/Blog/:id/edit" component={BlogEditScreen} /> */}
    <Route path="/career" component={CareerScreen} exact />
    <Route path="/career/create" component={CareerEditScreen} />
    <Route path="/news" component={NewsScreen} />
    <Route path="/partner" component={PartnerScreen} />
    <Route path="/collaborator" component={CollaboratorScreen} />
    <Route path="/login" component={LoginScreen} exact />

    <Footer />
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={PasswordResetScreen}
        />
        <Route component={defaultScreens} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
