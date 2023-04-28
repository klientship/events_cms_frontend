import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import EventComponent from "./sections/EventComponent";
import PricingComponent from "./sections/pricingcomponent";
import TeamComponent from "./sections/teamcomponent";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
import C2aComponent from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";
import LatestEvent from "../events/LatestEvent";
const CustomComponents = () => {
  return (
    <>
      
      <Banner2 />
      {/* <EventComponent/> */}
      <LatestEvent/>
      <TestimonialComponent/>
      <ContactComponent/>

      
    </>
  );
};

export default CustomComponents;
