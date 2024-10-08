import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlertDemo from './pages/AlertDemo';
import AlertDialogDemo from './pages/AlertDialogDemo';
import AvatarDemo from './pages/AvatarDemo';
import BadgeDemo from './pages/BadgeDemo';
import BreadcrumbDemo from './pages/BreadcrumdDemo';
import ButtonDemo from './pages/ButtonDemo';
import CardDemo from './pages/CardDemo';
import InputDemo from './pages/InputDemo';
import SpinnerDemo from './pages/SpinnerDemo';
import ToastDemo from './pages/ToastDemo';
import TooltipDemo from './pages/TooltipDemo';
import Introduction from './pages/Introduction';
import CarouselDemo from './pages/CarouselDemo';
import MarqueeDemo from './pages/MarqeeDemo';
import AccordionDemo from './pages/AccordionDemo';
import Installation from './pages/Installation';
import DrawerDemo from './pages/DrawerDemo';
import TabsDemo from './pages/TabsDemo';
import LandingPage from './ui/Home';
import DocsLayout from './ui/DocsLayout';
import Header from './ui/Header';
import DialogDemo from './pages/DialogDemo';
import CheckboxDemo from './pages/CheckboxDemo';
import LabelDemo from './pages/LabelDemo';
import ProgressDemo from './pages/ProgressDemo';
import UpliftAIStudio from './pages/UpliftAIStudio';

const App = () => {
  return (
    <Router>
      <div className="lg:px-[73px] ">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<DocsLayout />}>
          <Route path="/alert" element={<AlertDemo />} />
          <Route path="/alert-dialog" element={<AlertDialogDemo />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/avatar" element={<AvatarDemo />} />
          <Route path="/drawer" element={<DrawerDemo />} />
          <Route path="/badge" element={<BadgeDemo />} />
          <Route path="/breadcrumbs" element={<BreadcrumbDemo />} />
          <Route path="/tabs" element={<TabsDemo />} />
          <Route path="/button" element={<ButtonDemo />} />
          <Route path="/carousel" element={<CarouselDemo />} />
          <Route path="/dialog" element={<DialogDemo />} />
          <Route path="/accordion" element={<AccordionDemo />} />
          <Route path="/checkbox" element={<CheckboxDemo />} />
          <Route path="/label" element={<LabelDemo />} />
          <Route path="/progress" element={<ProgressDemo />} />
          <Route path="/uplift-ai-studio" element={<UpliftAIStudio />} />

          <Route path="/marquee" element={<MarqueeDemo />} />
          <Route path="/card" element={<CardDemo />} />
          <Route path="/input" element={<InputDemo />} />
          <Route path="/spinner" element={<SpinnerDemo />} />
          <Route path="/toast" element={<ToastDemo />} />
          <Route path="/tooltip" element={<TooltipDemo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
