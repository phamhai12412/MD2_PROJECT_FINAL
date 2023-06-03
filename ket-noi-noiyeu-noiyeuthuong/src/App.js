import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home";
import MembersPage from "./pages/members";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";
import SignInPage from "./pages/signin";
import PricingPlanPage from "./pages/pricingplan";
import ForeZeroPage from "./pages/forezero";
import CommunityPage from "./pages/community";
import BlogPage from "./pages/blog";
import BlogSinglePage from "./pages/blogsingle";
import ContactPage from "./pages/contact";
import ScrollToTop from "./component/layout/scralltop";
import Group from "./pages/group";
import Seachitem from "./pages/seachitem";
import FriendPage from "./pages/friend";
import UserManagement from "./admin/UserManagement";
import PostManagement from "./admin/PostManagement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignInPage />} />
          <Route path="pricing" element={<PricingPlanPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="timkiem" element={<Group />} />
          <Route path="seach" element={<Seachitem />} />
          <Route path="blog-single" element={<BlogSinglePage />} />
          <Route path="friend" element={<FriendPage />} />
          <Route path="adminuse" element={<UserManagement />} />
          <Route path="quanlypost" element={<PostManagement />} />

          <Route path="*" element={<ForeZeroPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
