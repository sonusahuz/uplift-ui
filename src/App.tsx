import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage, DocsLayout, Header } from './ui';
import {
  AlertDemo,
  AlertDialogDemo,
  AvatarDemo,
  BadgeDemo,
  BreadcrumbDemo,
  ButtonDemo,
  CardDemo,
  InputDemo,
  SpinnerDemo,
  ToastDemo,
  TooltipDemo,
  Introduction,
  CarouselDemo,
  MarqueeDemo,
  AccordionDemo,
  Installation,
  DrawerDemo,
  TabsDemo,
  DialogDemo,
  CheckboxDemo,
  LabelDemo,
  ProgressDemo,
} from './pages';

const App = () => {
  return (
    <Router>
      <div className="lg:px-[73px]">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<DocsLayout />}>
          <Route path="/docs/introduction" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/accordion" element={<AccordionDemo />} />
          <Route path="/docs/alert" element={<AlertDemo />} />
          <Route path="/docs/alert-dialog" element={<AlertDialogDemo />} />
          <Route path="/docs/avatar" element={<AvatarDemo />} />
          <Route path="/docs/badge" element={<BadgeDemo />} />
          <Route path="/docs/breadcrumbs" element={<BreadcrumbDemo />} />
          <Route path="/docs/button" element={<ButtonDemo />} />
          <Route path="/docs/card" element={<CardDemo />} />
          <Route path="/docs/carousel" element={<CarouselDemo />} />
          <Route path="/docs/checkbox" element={<CheckboxDemo />} />
          <Route path="/docs/dialog" element={<DialogDemo />} />
          <Route path="/docs/drawer" element={<DrawerDemo />} />
          <Route path="/docs/input" element={<InputDemo />} />
          <Route path="/docs/label" element={<LabelDemo />} />
          <Route path="/docs/marquee" element={<MarqueeDemo />} />
          <Route path="/docs/progress" element={<ProgressDemo />} />
          <Route path="/docs/spinner" element={<SpinnerDemo />} />
          <Route path="/docs/tabs" element={<TabsDemo />} />
          <Route path="/docs/toast" element={<ToastDemo />} />
          <Route path="/docs/tooltip" element={<TooltipDemo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
