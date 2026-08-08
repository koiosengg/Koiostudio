import React from "react";
import ProjectPage from "../Home/ProjectPage";
import PortfolioProjects from "../Home/PortfolioProjects";

// ─── NE Structures ────────────────────────────────────────
import NECover from "../../assets/Projects/NE Structures/Cover.webp";
import NEImg11 from "../../assets/Projects/NE Structures/Image 1.1.webp";
import NEImg12 from "../../assets/Projects/NE Structures/Image 1.2.webp";
import NEImg13 from "../../assets/Projects/NE Structures/Image 1.3.webp";
import NEImg14 from "../../assets/Projects/NE Structures/Image 1.4.webp";
import NEImg21 from "../../assets/Projects/NE Structures/Image 2.1.webp";
import NEImg22 from "../../assets/Projects/NE Structures/Image 2.2.webp";
import NEImg23 from "../../assets/Projects/NE Structures/Image 2.3.webp";
import NEImg24 from "../../assets/Projects/NE Structures/Image 2.4.webp";

// ─── Mobiglide ────────────────────────────────────────────
import MOBCover from "../../assets/Projects/Mobiglide/Cover.webp";
import MOBImg11 from "../../assets/Projects/Mobiglide/Image 1.1.webp";
import MOBImg12 from "../../assets/Projects/Mobiglide/Image 1.2.webp";
import MOBImg13 from "../../assets/Projects/Mobiglide/Image 1.3.webp";
import MOBImg14 from "../../assets/Projects/Mobiglide/Image 1.4.webp";
import MOBImg21 from "../../assets/Projects/Mobiglide/Image 2.1.webp";
import MOBImg22 from "../../assets/Projects/Mobiglide/Image 2.2.webp";
import MOBImg23 from "../../assets/Projects/Mobiglide/Image 2.3.webp";
import MOBImg24 from "../../assets/Projects/Mobiglide/Image 2.4.webp";

// ─── XLR8 ─────────────────────────────────────────────────
import XLR8Cover from "../../assets/Projects/XLR8/Cover.webp";
import XLR8Img11 from "../../assets/Projects/XLR8/Image 1.1.webp";
import XLR8Img12 from "../../assets/Projects/XLR8/Image 1.2.webp";
import XLR8Img13 from "../../assets/Projects/XLR8/Image 1.3.webp";
import XLR8Img14 from "../../assets/Projects/XLR8/Image 1.4.webp";
import XLR8Img21 from "../../assets/Projects/XLR8/Image 2.1.webp";
import XLR8Img22 from "../../assets/Projects/XLR8/Image 2.2.webp";
import XLR8Img23 from "../../assets/Projects/XLR8/Image 2.3.webp";
import XLR8Img24 from "../../assets/Projects/XLR8/Image 2.4.webp";

// ─── Cilkencave ───────────────────────────────────────────
import CILKCover from "../../assets/Projects/Cilkencave/Cover.webp";
import CILKImg11 from "../../assets/Projects/Cilkencave/Image 1.1.webp";
import CILKImg12 from "../../assets/Projects/Cilkencave/Image 1.2.webp";
import CILKImg13 from "../../assets/Projects/Cilkencave/Image 1.3.webp";
import CILKImg14 from "../../assets/Projects/Cilkencave/Image 1.4.webp";
import CILKImg21 from "../../assets/Projects/Cilkencave/Image 2.1.webp";
import CILKImg22 from "../../assets/Projects/Cilkencave/Image 2.2.webp";
import CILKImg23 from "../../assets/Projects/Cilkencave/Image 2.3.webp";
import CILKImg24 from "../../assets/Projects/Cilkencave/Image 2.4.webp";

// ─── Akarswift ────────────────────────────────────────────
import AKARCover from "../../assets/Projects/Akarswift/Cover.webp";
import AKARImg11 from "../../assets/Projects/Akarswift/Image 1.1.webp";
import AKARImg12 from "../../assets/Projects/Akarswift/Image 1.2.webp";
import AKARImg13 from "../../assets/Projects/Akarswift/Image 1.3.webp";
import AKARImg14 from "../../assets/Projects/Akarswift/Image 1.4.webp";
import AKARImg21 from "../../assets/Projects/Akarswift/Image 2.1.webp";
import AKARImg22 from "../../assets/Projects/Akarswift/Image 2.2.webp";
import AKARImg23 from "../../assets/Projects/Akarswift/Image 2.3.webp";
import AKARImg24 from "../../assets/Projects/Akarswift/Image 2.4.webp";

// ─── ISK Auto Industries ──────────────────────────────────
import ISKCover from "../../assets/Projects/ISK Auto Industries/Cover.webp";
import ISKImg11 from "../../assets/Projects/ISK Auto Industries/Image 1.1.webp";
import ISKImg12 from "../../assets/Projects/ISK Auto Industries/Image 1.2.webp";
import ISKImg13 from "../../assets/Projects/ISK Auto Industries/Image 1.3.webp";
import ISKImg14 from "../../assets/Projects/ISK Auto Industries/Image 1.4.webp";
import ISKImg21 from "../../assets/Projects/ISK Auto Industries/Image 2.1.webp";
import ISKImg22 from "../../assets/Projects/ISK Auto Industries/Image 2.2.webp";
import ISKImg23 from "../../assets/Projects/ISK Auto Industries/Image 2.3.webp";
import ISKImg24 from "../../assets/Projects/ISK Auto Industries/Image 2.4.webp";

// ─── Happy Gummies ────────────────────────────────────────
import HGCover from "../../assets/Projects/Happy Gummies/Cover.webp";
import HGImg11 from "../../assets/Projects/Happy Gummies/Image 1.1.webp";
import HGImg12 from "../../assets/Projects/Happy Gummies/Image 1.2.webp";
import HGImg13 from "../../assets/Projects/Happy Gummies/Image 1.3.webp";
import HGImg14 from "../../assets/Projects/Happy Gummies/Image 1.4.webp";
import HGImg21 from "../../assets/Projects/Happy Gummies/Image 2.1.webp";
import HGImg22 from "../../assets/Projects/Happy Gummies/Image 2.2.webp";
import HGImg23 from "../../assets/Projects/Happy Gummies/Image 2.3.webp";
import HGImg24 from "../../assets/Projects/Happy Gummies/Image 2.4.webp";

// ─── Talankey ─────────────────────────────────────────────
import TALCover from "../../assets/Projects/Talankey/Cover.webp";
import TALImg11 from "../../assets/Projects/Talankey/Image 1.1.webp";
import TALImg12 from "../../assets/Projects/Talankey/Image 1.2.webp";
import TALImg13 from "../../assets/Projects/Talankey/Image 1.3.webp";
import TALImg14 from "../../assets/Projects/Talankey/Image 1.4.webp";
import TALImg21 from "../../assets/Projects/Talankey/Image 2.1.webp";
import TALImg22 from "../../assets/Projects/Talankey/Image 2.2.webp";
import TALImg23 from "../../assets/Projects/Talankey/Image 2.3.webp";
import TALImg24 from "../../assets/Projects/Talankey/Image 2.4.webp";

// ─── Fourstor ─────────────────────────────────────────────
import FOURCover from "../../assets/Projects/Fourstor/Cover.webp";
import FOURImg11 from "../../assets/Projects/Fourstor/Image 1.1.webp";
import FOURImg12 from "../../assets/Projects/Fourstor/Image 1.2.webp";
import FOURImg13 from "../../assets/Projects/Fourstor/Image 1.3.webp";
import FOURImg14 from "../../assets/Projects/Fourstor/Image 1.4.webp";
import FOURImg21 from "../../assets/Projects/Fourstor/Image 2.1.webp";
import FOURImg22 from "../../assets/Projects/Fourstor/Image 2.2.webp";
import FOURImg23 from "../../assets/Projects/Fourstor/Image 2.3.webp";
import FOURImg24 from "../../assets/Projects/Fourstor/Image 2.4.webp";

// ─── Urban Sphere ─────────────────────────────────────────
import USCover from "../../assets/Projects/Urban Sphere/Cover.webp";
import USImg11 from "../../assets/Projects/Urban Sphere/Image 1.1.webp";
import USImg12 from "../../assets/Projects/Urban Sphere/Image 1.2.webp";
import USImg13 from "../../assets/Projects/Urban Sphere/Image 1.3.webp";
import USImg14 from "../../assets/Projects/Urban Sphere/Image 1.4.webp";
import USImg21 from "../../assets/Projects/Urban Sphere/Image 2.1.webp";
import USImg22 from "../../assets/Projects/Urban Sphere/Image 2.2.webp";
import USImg23 from "../../assets/Projects/Urban Sphere/Image 2.3.webp";
import USImg24 from "../../assets/Projects/Urban Sphere/Image 2.4.webp";

// ─── Balaji Proto Tools ───────────────────────────────────
import BPTCover from "../../assets/Projects/Balaji Proto Tools/Cover.webp";
import BPTImg11 from "../../assets/Projects/Balaji Proto Tools/Image 1.1.webp";
import BPTImg12 from "../../assets/Projects/Balaji Proto Tools/Image 1.2.webp";
import BPTImg13 from "../../assets/Projects/Balaji Proto Tools/Image 1.3.webp";
import BPTImg14 from "../../assets/Projects/Balaji Proto Tools/Image 1.4.webp";
import BPTImg21 from "../../assets/Projects/Balaji Proto Tools/Image 2.1.webp";
import BPTImg22 from "../../assets/Projects/Balaji Proto Tools/Image 2.2.webp";
import BPTImg23 from "../../assets/Projects/Balaji Proto Tools/Image 2.3.webp";
import BPTImg24 from "../../assets/Projects/Balaji Proto Tools/Image 2.4.webp";

// ─── MR Industries ────────────────────────────────────────
import MRCover from "../../assets/Projects/MR Industries/Cover.webp";
import MRImg11 from "../../assets/Projects/MR Industries/Image 1.1.webp";
import MRImg12 from "../../assets/Projects/MR Industries/Image 1.2.webp";
import MRImg13 from "../../assets/Projects/MR Industries/Image 1.3.webp";
import MRImg14 from "../../assets/Projects/MR Industries/Image 1.4.webp";
import MRImg21 from "../../assets/Projects/MR Industries/Image 2.1.webp";
import MRImg22 from "../../assets/Projects/MR Industries/Image 2.2.webp";
import MRImg23 from "../../assets/Projects/MR Industries/Image 2.3.webp";
import MRImg24 from "../../assets/Projects/MR Industries/Image 2.4.webp";

// ─── GMW ──────────────────────────────────────────────────
import GMWCover from "../../assets/Projects/GMW/Cover.webp";
import GMWImg11 from "../../assets/Projects/GMW/Image 1.1.webp";
import GMWImg12 from "../../assets/Projects/GMW/Image 1.2.webp";
import GMWImg13 from "../../assets/Projects/GMW/Image 1.3.webp";
import GMWImg14 from "../../assets/Projects/GMW/Image 1.4.webp";
import GMWImg21 from "../../assets/Projects/GMW/Image 2.1.webp";
import GMWImg22 from "../../assets/Projects/GMW/Image 2.2.webp";
import GMWImg23 from "../../assets/Projects/GMW/Image 2.3.webp";
import GMWImg24 from "../../assets/Projects/GMW/Image 2.4.webp";

// ─── Ameya ────────────────────────────────────────────────
import AMEYACover from "../../assets/Projects/Ameya/Cover.webp";
import AMEYAImg11 from "../../assets/Projects/Ameya/Image 1.1.webp";
import AMEYAImg12 from "../../assets/Projects/Ameya/Image 1.2.webp";
import AMEYAImg13 from "../../assets/Projects/Ameya/Image 1.3.webp";
import AMEYAImg14 from "../../assets/Projects/Ameya/Image 1.4.webp";
import AMEYAImg21 from "../../assets/Projects/Ameya/Image 2.1.webp";
import AMEYAImg22 from "../../assets/Projects/Ameya/Image 2.2.webp";
import AMEYAImg23 from "../../assets/Projects/Ameya/Image 2.3.webp";
import AMEYAImg24 from "../../assets/Projects/Ameya/Image 2.4.webp";

// ─── Clayful Homes ────────────────────────────────────────
import CLAYCover from "../../assets/Projects/Clayful Homes/Cover.webp";
import CLAYImg11 from "../../assets/Projects/Clayful Homes/Image 1.1.webp";
import CLAYImg12 from "../../assets/Projects/Clayful Homes/Image 1.2.webp";
import CLAYImg13 from "../../assets/Projects/Clayful Homes/Image 1.3.webp";
import CLAYImg14 from "../../assets/Projects/Clayful Homes/Image 1.4.webp";
import CLAYImg21 from "../../assets/Projects/Clayful Homes/Image 2.1.webp";
import CLAYImg22 from "../../assets/Projects/Clayful Homes/Image 2.2.webp";
import CLAYImg23 from "../../assets/Projects/Clayful Homes/Image 2.3.webp";
import CLAYImg24 from "../../assets/Projects/Clayful Homes/Image 2.4.webp";

// ─── SIMMFA ───────────────────────────────────────────────
import SIMMFACover from "../../assets/Projects/SIMMFA/Cover.webp";
import SIMMFAImg11 from "../../assets/Projects/SIMMFA/Image 1.1.webp";
import SIMMFAImg12 from "../../assets/Projects/SIMMFA/Image 1.2.webp";
import SIMMFAImg13 from "../../assets/Projects/SIMMFA/Image 1.3.webp";
import SIMMFAImg14 from "../../assets/Projects/SIMMFA/Image 1.4.webp";
import SIMMFAImg21 from "../../assets/Projects/SIMMFA/Image 2.1.webp";
import SIMMFAImg22 from "../../assets/Projects/SIMMFA/Image 2.2.webp";
import SIMMFAImg23 from "../../assets/Projects/SIMMFA/Image 2.3.webp";
import SIMMFAImg24 from "../../assets/Projects/SIMMFA/Image 2.4.webp";

// ─── Scale Craft ──────────────────────────────────────────
import SCCover from "../../assets/Projects/Scale Craft/Cover.webp";
import SCImg11 from "../../assets/Projects/Scale Craft/Image 1.1.webp";
import SCImg12 from "../../assets/Projects/Scale Craft/Image 1.2.webp";
import SCImg13 from "../../assets/Projects/Scale Craft/Image 1.3.webp";
import SCImg14 from "../../assets/Projects/Scale Craft/Image 1.4.webp";
import SCImg21 from "../../assets/Projects/Scale Craft/Image 2.1.webp";
import SCImg22 from "../../assets/Projects/Scale Craft/Image 2.2.webp";
import SCImg23 from "../../assets/Projects/Scale Craft/Image 2.3.webp";
import SCImg24 from "../../assets/Projects/Scale Craft/Image 2.4.webp";

// ─── Machine Movers ───────────────────────────────────────
import MMCover from "../../assets/Projects/Machine Movers/Cover.webp";
import MMImg11 from "../../assets/Projects/Machine Movers/Image 1.1.webp";
import MMImg12 from "../../assets/Projects/Machine Movers/Image 1.2.webp";
import MMImg13 from "../../assets/Projects/Machine Movers/Image 1.3.webp";
import MMImg14 from "../../assets/Projects/Machine Movers/Image 1.4.webp";
import MMImg21 from "../../assets/Projects/Machine Movers/Image 2.1.webp";
import MMImg22 from "../../assets/Projects/Machine Movers/Image 2.2.webp";
import MMImg23 from "../../assets/Projects/Machine Movers/Image 2.3.webp";
import MMImg24 from "../../assets/Projects/Machine Movers/Image 2.4.webp";

// ─── Airportr ─────────────────────────────────────────────
import AIRCover from "../../assets/Projects/Airportr/Cover.webp";
import AIRImg11 from "../../assets/Projects/Airportr/Image 1.1.webp";
import AIRImg12 from "../../assets/Projects/Airportr/Image 1.2.webp";
import AIRImg13 from "../../assets/Projects/Airportr/Image 1.3.webp";
import AIRImg21 from "../../assets/Projects/Airportr/Image 2.1.webp";
import AIRImg22 from "../../assets/Projects/Airportr/Image 2.2.webp";
import AIRImg23 from "../../assets/Projects/Airportr/Image 2.3.webp";
import AIRImg31 from "../../assets/Projects/Airportr/Image 3.1.webp";
import AIRImg32 from "../../assets/Projects/Airportr/Image 3.2.webp";
import AIRImg33 from "../../assets/Projects/Airportr/Image 3.3.webp";
import AIRImg41 from "../../assets/Projects/Airportr/Image 4.1.webp";
import AIRImg42 from "../../assets/Projects/Airportr/Image 4.2.webp";
import AIRImg43 from "../../assets/Projects/Airportr/Image 4.3.webp";

// ─── LMG ──────────────────────────────────────────────────
import LMGCover from "../../assets/Projects/LMG/Cover.webp";
import LMGImg11 from "../../assets/Projects/LMG/Image 1.1.webp";
import LMGImg12 from "../../assets/Projects/LMG/Image 1.2.webp";
import LMGImg13 from "../../assets/Projects/LMG/Image 1.3.webp";
import LMGImg21 from "../../assets/Projects/LMG/Image 2.1.webp";
import LMGImg22 from "../../assets/Projects/LMG/Image 2.2.webp";
import LMGImg23 from "../../assets/Projects/LMG/Image 2.3.webp";
import LMGImg31 from "../../assets/Projects/LMG/Image 3.1.webp";
import LMGImg32 from "../../assets/Projects/LMG/Image 3.2.webp";
import LMGImg33 from "../../assets/Projects/LMG/Image 3.3.webp";
import LMGImg41 from "../../assets/Projects/LMG/Image 4.1.webp";
import LMGImg42 from "../../assets/Projects/LMG/Image 4.2.webp";
import LMGImg43 from "../../assets/Projects/LMG/Image 4.3.webp";

// ─── Negilu ───────────────────────────────────────────────
import NEGCover from "../../assets/Projects/Negilu/Cover.webp";
import NEGImg11 from "../../assets/Projects/Negilu/Image 1.1.webp";
import NEGImg12 from "../../assets/Projects/Negilu/Image 1.2.webp";
import NEGImg13 from "../../assets/Projects/Negilu/Image 1.3.webp";
import NEGImg21 from "../../assets/Projects/Negilu/Image 2.1.webp";
import NEGImg22 from "../../assets/Projects/Negilu/Image 2.2.webp";
import NEGImg23 from "../../assets/Projects/Negilu/Image 2.3.webp";
import NEGImg31 from "../../assets/Projects/Negilu/Image 3.1.webp";
import NEGImg32 from "../../assets/Projects/Negilu/Image 3.2.webp";
import NEGImg33 from "../../assets/Projects/Negilu/Image 3.3.webp";
import NEGImg41 from "../../assets/Projects/Negilu/Image 4.1.webp";
import NEGImg42 from "../../assets/Projects/Negilu/Image 4.2.webp";
import NEGImg43 from "../../assets/Projects/Negilu/Image 4.3.webp";

// ─── Idavi Foods ──────────────────────────────────────────
import IDFCover from "../../assets/Projects/Idavi Foods/Cover.webp";
import IDFImg11 from "../../assets/Projects/Idavi Foods/Image 1.1.webp";
import IDFImg12 from "../../assets/Projects/Idavi Foods/Image 1.2.webp";
import IDFImg13 from "../../assets/Projects/Idavi Foods/Image 1.3.webp";
import IDFImg21 from "../../assets/Projects/Idavi Foods/Image 2.1.webp";
import IDFImg22 from "../../assets/Projects/Idavi Foods/Image 2.2.webp";
import IDFImg23 from "../../assets/Projects/Idavi Foods/Image 2.3.webp";
import IDFImg31 from "../../assets/Projects/Idavi Foods/Image 3.1.webp";
import IDFImg32 from "../../assets/Projects/Idavi Foods/Image 3.2.webp";
import IDFImg33 from "../../assets/Projects/Idavi Foods/Image 3.3.webp";
import IDFImg41 from "../../assets/Projects/Idavi Foods/Image 4.1.webp";
import IDFImg42 from "../../assets/Projects/Idavi Foods/Image 4.2.webp";
import IDFImg43 from "../../assets/Projects/Idavi Foods/Image 4.3.webp";

// ─── Micronix ─────────────────────────────────────────────
import MICCover from "../../assets/Projects/Micronix/Cover.webp";
import MICImg11 from "../../assets/Projects/Micronix/Image 1.1.webp";
import MICImg12 from "../../assets/Projects/Micronix/Image 1.2.webp";
import MICImg13 from "../../assets/Projects/Micronix/Image 1.3.webp";
import MICImg21 from "../../assets/Projects/Micronix/Image 2.1.webp";
import MICImg22 from "../../assets/Projects/Micronix/Image 2.2.webp";
import MICImg23 from "../../assets/Projects/Micronix/Image 2.3.webp";
import MICImg31 from "../../assets/Projects/Micronix/Image 3.1.webp";
import MICImg32 from "../../assets/Projects/Micronix/Image 3.2.webp";
import MICImg33 from "../../assets/Projects/Micronix/Image 3.3.webp";

// ─── Nirmalyam ────────────────────────────────────────────
import NIRCover from "../../assets/Projects/Nirmalyam/Cover.webp";
import NIRImg1 from "../../assets/Projects/Nirmalyam/Image 1.webp";
import NIRImg2 from "../../assets/Projects/Nirmalyam/Image 2.webp";
import NIRImg31 from "../../assets/Projects/Nirmalyam/Image 3.1.webp";
import NIRImg32 from "../../assets/Projects/Nirmalyam/Image 3.2.webp";
import NIRImg4 from "../../assets/Projects/Nirmalyam/Image 4.webp";

// ─── GOAT Cafe ────────────────────────────────────────────
import GOATCover from "../../assets/Projects/GOAT/Cover.webp";
import GOATImg1 from "../../assets/Projects/GOAT/Image 1.webp";
import GOATImg21 from "../../assets/Projects/GOAT/Image 2.1.webp";
import GOATImg22 from "../../assets/Projects/GOAT/Image 2.2.webp";
import GOATImg3 from "../../assets/Projects/GOAT/Image 3.webp";

// ─── Aerovidya ────────────────────────────────────────────
import AEROCover from "../../assets/Projects/Aerovidya/Cover.webp";
import AEROImg1 from "../../assets/Projects/Aerovidya/Image 1.webp";
import AEROImg21 from "../../assets/Projects/Aerovidya/Image 2.1.webp";
import AEROImg22 from "../../assets/Projects/Aerovidya/Image 2.2.webp";
import AEROImg3 from "../../assets/Projects/Aerovidya/Image 3.webp";

// ─── Coffee Culture ───────────────────────────────────────
import CCCover from "../../assets/Projects/Coffee Culture/Cover.webp";
import CCImg1 from "../../assets/Projects/Coffee Culture/Image 1.webp";
import CCImg21 from "../../assets/Projects/Coffee Culture/Image 2.1.webp";
import CCImg22 from "../../assets/Projects/Coffee Culture/Image 2.2.webp";
import CCImg3 from "../../assets/Projects/Coffee Culture/Image 3.webp";

// ─── Motard ───────────────────────────────────────────────
import MOTARDCover from "../../assets/Projects/Motard/Cover.webp";
import MOTARDImg11 from "../../assets/Projects/Motard/Image 1.1.webp";
import MOTARDImg12 from "../../assets/Projects/Motard/Image 1.2.webp";
import MOTARDImg21 from "../../assets/Projects/Motard/Image 2.1.webp";
import MOTARDImg22 from "../../assets/Projects/Motard/Image 2.2.webp";
import MOTARDImg31 from "../../assets/Projects/Motard/Image 3.1.webp";
import MOTARDImg32 from "../../assets/Projects/Motard/Image 3.2.webp";

// ─── Smilevieu ────────────────────────────────────────────
import SMILECover from "../../assets/Projects/Smilevieu/3.webp";

// ─── Voltus ───────────────────────────────────────────────
import VOLTUSCover from "../../assets/Projects/Voltus/voltus1.webp";

// ─── Green Tara ───────────────────────────────────────────
import GTCover from "../../assets/Projects/Green Tara/1.webp";

// ════════════════════════════════════════════════════════════
// EXPORTED COMPONENTS
// ════════════════════════════════════════════════════════════

export function NeStructures() {
  return (
    <ProjectPage
      category="Website"
      title="NE Structures"
      industry="Construction Industries"
      websiteUrl="https://nestructures.co/"
      cover={NECover}
      overview="Designed a corporate website for a steel building solutions provider with a clean, minimalistic layout to enhance user experience. Focused on intuitive navigation, modern visuals, and clear content presentation to reflect the brand's professionalism."
      challenges="Ideating and designing certain sections of the homepage proved to be a challenging task. It required in-depth design research to find the right balance between aesthetics and functionality."
      approach="Used a clean and structured layout with visual breakdowns to clearly represent each stage of the service process. Focused on clarity and flow to guide visitors smoothly through the content."
      results="Created a clean and structured UI that aligns with the industrial brand's identity. The design reflects the brand's professionalism while maintaining visual consistency across all elements."
      developmentStrategies="The banner background was customized to accurately reflect the grid line pattern from the design. A dynamic gallery section was developed to showcase various client projects. Dedicated pages were also built for products, services, and infrastructure."
      images={[
        [NEImg11, NEImg12, NEImg13, NEImg14],
        [NEImg21, NEImg22, NEImg23, NEImg24],
      ]}
    />
  );
}

export function Mobiglide() {
  return (
    <ProjectPage
      category="Website"
      title="Mobiglide"
      industry="Human Resources"
      cover={MOBCover}
      overview="Developed a website for an engineering company specializing in process automation and performance-driven solutions. The design emphasizes clarity and efficiency."
      challenges="Structuring the layouts while maintaining balance between visual cards was a challenging yet rewarding task requiring careful attention to spacing and hierarchy."
      approach="Applied clean spacing and subtle background elements to create a balanced layout. Emphasized contrasting colors to enhance readability and draw attention to key content."
      results="Crafted a professional interface that reinforced the brand's technical and innovative image. The overall look enhanced credibility and user trust."
      developmentStrategies="Implemented smooth scroll-based animations and interactive elements to enhance user engagement. Focused on performance optimization to ensure fast load times."
      images={[
        [MOBImg11, MOBImg12, MOBImg13, MOBImg14],
        [MOBImg21, MOBImg22, MOBImg23, MOBImg24],
      ]}
    />
  );
}

export function Xlr8() {
  return (
    <ProjectPage
      category="Website"
      title="XLR8"
      industry="EV and Automobile Go-kart"
      websiteUrl="https://xlr8gokarts.com/"
      cover={XLR8Cover}
      overview="Designed a bold, high-energy website for an EV go-kart brand. The design focuses on speed, innovation, and excitement, using dynamic visuals and a dark color palette."
      challenges="Capturing the thrill and energy of go-kart racing in a web format required careful visual storytelling and balancing high-impact imagery with clear information architecture."
      approach="Used motion-inspired design elements, bold typography, and strategic color contrasts to evoke speed and excitement. Every section was designed to guide users through a high-energy brand journey."
      results="Delivered a visually striking website that communicates the brand's performance identity. The design effectively captures audience excitement and clearly presents the XLR8 experience."
      developmentStrategies="Implemented smooth scroll animations and performance-optimized image loading. Custom hover effects and interactive elements enhance user engagement across all devices."
      images={[
        [XLR8Img11, XLR8Img12, XLR8Img13, XLR8Img14],
        [XLR8Img21, XLR8Img22, XLR8Img23, XLR8Img24],
      ]}
    />
  );
}

export function Cilkencave() {
  return (
    <ProjectPage
      category="Website"
      title="Cilkencave"
      industry="Semi Conductor Industry"
      cover={CILKCover}
      overview="Designed a professional website for a semiconductor industry client with a focus on technical precision and modern aesthetics. The layout communicates expertise and reliability."
      challenges="Presenting complex technical content in a visually engaging and accessible way was the primary challenge. Balancing technical depth with user-friendly design required careful information architecture."
      approach="Applied a structured layout with clear content hierarchy and technical visuals. Used a professional color palette to convey precision and industry expertise."
      results="Created a clean, professional website that effectively communicates the brand's technical capabilities. The design enhances credibility and provides a seamless user experience."
      developmentStrategies="Developed responsive layouts with optimized performance. Implemented smooth transitions and interactive elements that showcase technical content without compromising page speed."
      images={[
        [CILKImg11, CILKImg12, CILKImg13, CILKImg14],
        [CILKImg21, CILKImg22, CILKImg23, CILKImg24],
      ]}
    />
  );
}

export function Akarswift() {
  return (
    <ProjectPage
      category="Website"
      title="Akarswift"
      industry="Logistics Solutions"
      cover={AKARCover}
      overview="Developed a logistics solutions website with a focus on trust, reliability, and efficiency. The design communicates speed and precision through clean visuals and structured content."
      challenges="Creating a design that conveys both speed and reliability while maintaining a professional tone required careful balance of visual elements and typography."
      approach="Used a clean, structured layout with strategic use of color and typography to emphasize efficiency and professionalism. Interactive elements guide users through services seamlessly."
      results="Delivered a professional website that effectively communicates the brand's logistics expertise. The clean design enhances user trust and provides clear service information."
      developmentStrategies="Built a fully responsive website with optimized asset loading for fast performance. Implemented smooth navigation and clear call-to-action elements throughout."
      images={[
        [AKARImg11, AKARImg12, AKARImg13, AKARImg14],
        [AKARImg21, AKARImg22, AKARImg23, AKARImg24],
      ]}
    />
  );
}

export function IskAutoIndustries() {
  return (
    <ProjectPage
      category="Website"
      title="ISK Auto Industries"
      industry="Automotive Component Manufacturers"
      cover={ISKCover}
      overview="Designed a corporate website for an automotive component manufacturer. The design showcases precision engineering and manufacturing capabilities with a professional industrial aesthetic."
      challenges="Communicating complex manufacturing processes and technical specifications in a visually appealing way while maintaining clarity for diverse audiences."
      approach="Used structured content sections with clear typography and industrial-inspired design elements. Focused on showcasing products and manufacturing capabilities effectively."
      results="Delivered a professional website that effectively communicates the brand's manufacturing expertise and builds client confidence through clear, well-organized content."
      developmentStrategies="Implemented responsive design optimized for desktop and mobile. Developed interactive product showcases and efficient contact forms for business inquiries."
      images={[
        [ISKImg11, ISKImg12, ISKImg13, ISKImg14],
        [ISKImg21, ISKImg22, ISKImg23, ISKImg24],
      ]}
    />
  );
}

export function HappyGummies() {
  return (
    <ProjectPage
      category="Website"
      title="Happy Gummies"
      industry="Healthcare Products"
      cover={HGCover}
      overview="Designed a vibrant, playful website for a healthcare gummy products brand. The design balances fun aesthetics with health-focused credibility and product clarity."
      challenges="Balancing a fun, approachable visual identity with the trust and credibility required in the healthcare space required careful design decisions."
      approach="Used a bright color palette with playful design elements while maintaining clear product information and health benefit communication. Focused on building consumer trust."
      results="Created an engaging website that appeals to health-conscious consumers. The design effectively communicates product benefits while maintaining a joyful brand personality."
      developmentStrategies="Built an e-commerce ready interface with smooth product browsing. Implemented clear CTA buttons and optimized checkout flow for improved conversion rates."
      images={[
        [HGImg11, HGImg12, HGImg13, HGImg14],
        [HGImg21, HGImg22, HGImg23, HGImg24],
      ]}
    />
  );
}

export function Talankey() {
  return (
    <ProjectPage
      category="Website"
      title="Talankey"
      industry="Mechanical / Manufacturing Industry"
      cover={TALCover}
      overview="Designed a professional website for a mechanical and manufacturing industry client. The design communicates precision, reliability, and technical expertise."
      challenges="Presenting technical manufacturing capabilities in a visually engaging way while maintaining industry credibility and reaching multiple target audiences."
      approach="Applied a structured, professional layout with industrial design elements. Used high-quality imagery and clear content hierarchy to showcase manufacturing capabilities."
      results="Delivered a professional website that enhances brand credibility and effectively communicates the company's manufacturing expertise and service offerings."
      developmentStrategies="Developed a performance-optimized responsive website. Implemented smooth scroll animations and interactive product/service showcases."
      images={[
        [TALImg11, TALImg12, TALImg13, TALImg14],
        [TALImg21, TALImg22, TALImg23, TALImg24],
      ]}
    />
  );
}

export function Fourstor() {
  return (
    <ProjectPage
      category="Website"
      title="Fourstor"
      industry="Automation Industry"
      cover={FOURCover}
      overview="Designed a modern website for an automation industry company. The design reflects technological advancement and precision with a clean, futuristic aesthetic."
      challenges="Communicating complex automation solutions and technical capabilities in an accessible, visually compelling way for both technical and non-technical audiences."
      approach="Used a clean, tech-inspired design with strategic use of geometric elements and precision typography. Structured content to clearly explain automation benefits."
      results="Created a professional website that effectively positions the brand as a leader in automation. The design builds credibility and clearly communicates value propositions."
      developmentStrategies="Built a fully responsive website with interactive elements showcasing automation capabilities. Implemented smooth transitions and optimized performance."
      images={[
        [FOURImg11, FOURImg12, FOURImg13, FOURImg14],
        [FOURImg21, FOURImg22, FOURImg23, FOURImg24],
      ]}
    />
  );
}

export function UrbanSphere() {
  return (
    <ProjectPage
      category="Website"
      title="Urban Sphere"
      industry="Automotive Industry"
      cover={USCover}
      overview="Designed a sleek, modern website for an automotive industry brand. The design captures the essence of urban mobility with bold visuals and dynamic layouts."
      challenges="Creating a design that captures the excitement and innovation of the automotive brand while maintaining accessibility and clear product communication."
      approach="Used bold typography, dynamic imagery, and a sophisticated color palette to create an immersive automotive experience. Focused on showcasing the brand's urban identity."
      results="Delivered a visually striking website that effectively communicates the brand's automotive identity. The design creates an emotional connection with the target audience."
      developmentStrategies="Implemented parallax scrolling effects and smooth animations to create an immersive experience. Optimized for performance across all devices and screen sizes."
      images={[
        [USImg11, USImg12, USImg13, USImg14],
        [USImg21, USImg22, USImg23, USImg24],
      ]}
    />
  );
}

export function BalajiProtoTools() {
  return (
    <ProjectPage
      category="Website"
      title="Balaji Proto Tools"
      industry="Automotive and Manufacturing Industry"
      cover={BPTCover}
      overview="Designed a professional website for an automotive and manufacturing tools company. The design emphasizes precision, reliability, and technical expertise in tool manufacturing."
      challenges="Communicating the technical aspects of proto tool manufacturing while making the website accessible and engaging for potential business clients."
      approach="Applied an industrial-inspired design with clear product categorization and technical specifications display. Used professional imagery and structured layouts."
      results="Created a website that effectively showcases the company's manufacturing capabilities and builds confidence with potential B2B clients."
      developmentStrategies="Developed a product catalog system with detailed specification pages. Implemented inquiry forms and optimized the site for industrial sector search terms."
      images={[
        [BPTImg11, BPTImg12, BPTImg13, BPTImg14],
        [BPTImg21, BPTImg22, BPTImg23, BPTImg24],
      ]}
    />
  );
}

export function MrIndustries() {
  return (
    <ProjectPage
      category="Website"
      title="MR Industries"
      industry="Automotive Wiring Harness Manufacturing"
      cover={MRCover}
      overview="Designed a professional website for an automotive wiring harness manufacturer. The design showcases precision manufacturing and technical excellence in the automotive supply chain."
      challenges="Presenting complex wiring harness manufacturing processes in a visually clear and engaging way for automotive industry clients."
      approach="Used a clean industrial design with technical illustrations and clear product category navigation. Emphasized quality and precision in every design element."
      results="Delivered a professional B2B website that effectively communicates manufacturing expertise and builds industry credibility for the brand."
      developmentStrategies="Built an optimized responsive website with product showcase capabilities. Implemented technical specification displays and business inquiry systems."
      images={[
        [MRImg11, MRImg12, MRImg13, MRImg14],
        [MRImg21, MRImg22, MRImg23, MRImg24],
      ]}
    />
  );
}

export function Gmw() {
  return (
    <ProjectPage
      category="Website"
      title="GMW"
      industry="Automotive Industry"
      cover={GMWCover}
      overview="Designed a sophisticated automotive industry website for GMW. The design reflects premium automotive quality with bold visuals and a refined aesthetic."
      challenges="Creating a design that balances the prestige and performance of the automotive brand with clear product and service communication."
      approach="Used a premium design language with high-quality imagery, bold typography, and sophisticated color choices. Every element reflects the automotive brand's excellence."
      results="Delivered a premium automotive website that effectively communicates the brand's quality and performance values to discerning customers."
      developmentStrategies="Implemented smooth animations and immersive visual experiences. Built optimized image galleries and interactive features for automotive enthusiasts."
      images={[
        [GMWImg11, GMWImg12, GMWImg13, GMWImg14],
        [GMWImg21, GMWImg22, GMWImg23, GMWImg24],
      ]}
    />
  );
}

export function Ameya() {
  return (
    <ProjectPage
      category="Website"
      title="Ameya"
      industry="Homestays and Hospitality"
      cover={AMEYACover}
      overview="Designed a warm, inviting website for a homestay and hospitality brand. The design creates a sense of welcome and comfort to attract travelers seeking authentic experiences."
      challenges="Capturing the warmth and authenticity of homestay hospitality in a digital format while showcasing the unique character of each property."
      approach="Used warm color palettes, authentic photography integration, and storytelling design elements to evoke the feeling of home. Focused on creating emotional connection."
      results="Created an inviting website that effectively communicates the brand's unique hospitality offering. The design inspires travel and drives booking conversions."
      developmentStrategies="Built an integrated booking system with property showcases and guest review displays. Implemented smooth gallery experiences and location-based features."
      images={[
        [AMEYAImg11, AMEYAImg12, AMEYAImg13, AMEYAImg14],
        [AMEYAImg21, AMEYAImg22, AMEYAImg23, AMEYAImg24],
      ]}
    />
  );
}

export function ClayfulHomes() {
  return (
    <ProjectPage
      category="Website"
      title="Clayful Homes"
      industry="Pottery E-commerce"
      cover={CLAYCover}
      overview="Designed an artisan e-commerce website for a pottery brand. The design celebrates handcrafted aesthetics with earthy tones and organic visual elements."
      challenges="Creating an e-commerce experience that showcases the handcrafted nature of pottery products while maintaining a modern, functional shopping interface."
      approach="Used earthy colors, organic design elements, and artisan-inspired typography to reflect the handcrafted nature of the products. Focused on product photography presentation."
      results="Delivered an e-commerce website that effectively showcases pottery products and converts visitors into customers through compelling product presentation."
      developmentStrategies="Built a fully functional e-commerce platform with product filtering, cart management, and secure checkout. Implemented rich product galleries with zoom capabilities."
      images={[
        [CLAYImg11, CLAYImg12, CLAYImg13, CLAYImg14],
        [CLAYImg21, CLAYImg22, CLAYImg23, CLAYImg24],
      ]}
    />
  );
}

export function Simmfa() {
  return (
    <ProjectPage
      category="Website"
      title="SIMMFA"
      industry="Music Academy"
      cover={SIMMFACover}
      overview="Designed a vibrant website for a music academy. The design captures the energy and passion of music education with dynamic visuals and an engaging user experience."
      challenges="Creating a website that appeals to both aspiring students and their parents while effectively communicating the academy's teaching methodology and curriculum."
      approach="Used dynamic musical design elements, vibrant colors, and engaging layouts to capture the energy of music. Clear course information and student success stories build credibility."
      results="Created an engaging website that effectively attracts prospective students and communicates the academy's value proposition. The design drives enrollment inquiries."
      developmentStrategies="Implemented course catalog browsing with detailed curriculum information. Built student testimonial sections and easy enrollment inquiry forms."
      images={[
        [SIMMFAImg11, SIMMFAImg12, SIMMFAImg13, SIMMFAImg14],
        [SIMMFAImg21, SIMMFAImg22, SIMMFAImg23, SIMMFAImg24],
      ]}
    />
  );
}

export function ScaleCraft() {
  return (
    <ProjectPage
      category="Website"
      title="Scale Craft"
      industry="F&B Business Consultancy"
      cover={SCCover}
      overview="Designed a professional website for an F&B business consultancy. The design projects expertise and strategic thinking while maintaining an approachable tone for food business owners."
      challenges="Balancing professional authority with approachability for F&B business owners seeking consultancy services. Making complex business concepts accessible through design."
      approach="Used a sophisticated design with clear service explanations and success metrics. Incorporated F&B visual elements while maintaining professional consultancy aesthetic."
      results="Delivered a professional website that establishes credibility in the F&B consultancy space and effectively communicates the value of the services offered."
      developmentStrategies="Built a case study showcase system and consultation booking workflow. Implemented clear service tier presentations and client success metrics displays."
      images={[
        [SCImg11, SCImg12, SCImg13, SCImg14],
        [SCImg21, SCImg22, SCImg23, SCImg24],
      ]}
    />
  );
}

export function MachineMovers() {
  return (
    <ProjectPage
      category="Website"
      title="Machine Movers"
      industry="Industrial Logistics"
      cover={MMCover}
      overview="Designed a professional website for an industrial machinery moving company. The design communicates strength, reliability, and specialized expertise in heavy equipment logistics."
      challenges="Communicating the complexity and safety requirements of industrial machine moving while making the service clear and accessible to potential clients."
      approach="Used strong visual elements reflecting industrial strength and precision. Clear service descriptions and safety compliance information build client confidence."
      results="Created a website that effectively communicates the specialized nature of the service and builds trust with industrial clients requiring machinery relocation."
      developmentStrategies="Built a service inquiry system with equipment specification forms. Implemented project portfolio showcases and safety certification displays."
      images={[
        [MMImg11, MMImg12, MMImg13, MMImg14],
        [MMImg21, MMImg22, MMImg23, MMImg24],
      ]}
    />
  );
}

export function Airportr() {
  return (
    <ProjectPage
      category="Application"
      title="Airportr"
      industry="Goods Tracking App"
      cover={AIRCover}
      overview="Focuses on a vehicle booking app tailored for farmers, enabling easy rental of JCBs and tractors. The design ensures a simple, user-friendly experience, allowing quick access to available machinery. It bridges the gap between equipment owners and farmers in need, streamlining the booking process."
      challenges="One of the key challenges was conducting user research for a unique app with limited existing references. Identifying user flows without much prior data made it difficult to validate decisions. Tracking user behavior and needs required extra effort and creative approaches."
      approach="Analyzed the user flow of Ola and Uber to gain a deeper understanding of ride-booking app structures. This helped identify key UX patterns and best practices. Insights were used to enhance the usability and flow of the app."
      results="Crafted a user-friendly interface tailored for first-time users. Focused on simplicity and inclusivity to ensure a smooth onboarding experience. The design enhances accessibility while maintaining a visually appealing layout."
      developmentStrategies=""
      images={[
        [AIRImg11, AIRImg12, AIRImg13],
        [AIRImg21, AIRImg22, AIRImg23],
        [AIRImg31, AIRImg32, AIRImg33],
        [AIRImg41, AIRImg42, AIRImg43],
      ]}
    />
  );
}

export function Lmg() {
  return (
    <ProjectPage
      category="Application"
      title="LMG"
      industry="Tourism & Hospitality"
      cover={LMGCover}
      overview="Designed a tourism and hospitality application for Last Minute Guru. The app enables travelers to discover and book last-minute travel deals with ease."
      challenges="Creating a compelling discovery experience for last-minute travel while managing complex inventory and pricing in real-time."
      approach="Used vibrant destination imagery, intuitive filtering, and clear deal presentation to make last-minute booking feel exciting rather than stressful."
      results="Delivered an engaging travel app that successfully converts last-minute deal seekers into confirmed bookings through effective design and UX."
      developmentStrategies=""
      images={[
        [LMGImg11, LMGImg12, LMGImg13],
        [LMGImg21, LMGImg22, LMGImg23],
        [LMGImg31, LMGImg32, LMGImg33],
        [LMGImg41, LMGImg42, LMGImg43],
      ]}
    />
  );
}

export function Negilu() {
  return (
    <ProjectPage
      category="Application"
      title="Negilu"
      industry="Agriculture & Agritech"
      cover={NEGCover}
      overview="Designed an agriculture technology application for Negilu. The app connects farmers with modern agricultural resources and market access."
      challenges="Designing for a diverse user base including farmers with varying levels of digital literacy while providing sophisticated agritech functionality."
      approach="Used a simple, accessible interface with clear visual guidance. Incorporated agricultural visual language that resonates with the farming community."
      results="Created an accessible agritech application that successfully bridges the digital divide for agricultural communities and improves farming outcomes."
      developmentStrategies=""
      images={[
        [NEGImg11, NEGImg12, NEGImg13],
        [NEGImg21, NEGImg22, NEGImg23],
        [NEGImg31, NEGImg32, NEGImg33],
        [NEGImg41, NEGImg42, NEGImg43],
      ]}
    />
  );
}

export function IdaviFoods() {
  return (
    <ProjectPage
      category="Application"
      title="Idavi Foods"
      industry="Food Industry"
      cover={IDFCover}
      overview="Designed a food industry application for Idavi Foods. The app creates a seamless ordering and delivery experience for food products."
      challenges="Creating an appetizing digital experience that drives food orders while managing complex menu structures and delivery logistics."
      approach="Used rich food photography integration, intuitive menu navigation, and streamlined ordering flow. Colors and visuals evoke appetite and quality."
      results="Delivered an engaging food application that increases order frequency and customer retention through excellent user experience design."
      developmentStrategies=""
      images={[
        [IDFImg11, IDFImg12, IDFImg13],
        [IDFImg21, IDFImg22, IDFImg23],
        [IDFImg31, IDFImg32, IDFImg33],
        [IDFImg41, IDFImg42, IDFImg43],
      ]}
    />
  );
}

export function Micronix() {
  return (
    <ProjectPage
      category="BROCHURE"
      title="Micronix"
      industry="EV Batteries"
      cover={MICCover}
      overview="Created a comprehensive brand identity for Micronix, an EV battery company. The brand communicates innovation, reliability, and sustainable technology leadership."
      challenges="Developing a brand identity that conveys both technological sophistication and environmental responsibility in the competitive EV battery market."
      approach="Designed a modern brand identity with electric energy metaphors. Used clean lines, tech-inspired typography, and a sustainable color palette."
      results="Created a distinctive brand identity that positions Micronix as a credible player in the EV battery space with strong visual appeal."
      developmentStrategies=""
      images={[
        [MICImg11, MICImg12, MICImg13],
        [MICImg21, MICImg22, MICImg23],
        [MICImg31, MICImg32, MICImg33],
      ]}
    />
  );
}

export function Nirmalyam() {
  return (
    <ProjectPage
      isBranding
      category="Logo designing & Company Branding"
      title="Nirmalyam"
      industry="Food Industry"
      cover={NIRCover}
      overview="Nirmalyam Ghee & Butter needed a brand identity that reflects purity, heritage, and authenticity. The goal was to capture the essence of tradition while presenting it in a modern, elegant way."
      challenges="The challenge was to balance tradition with simplicity—making the logo minimal without losing depth. Ensuring it felt both culturally rich and universally appealing required careful design precision."
      approach="We drew inspiration from a single golden drop of ghee, shaping it into a minimal yet meaningful logo. Every curve and detail was crafted to represent purity, tradition, and the brand's deep cultural roots."
      results="The final logo embodies elegance, heritage, and authenticity in one iconic mark. It goes beyond aesthetics, serving as a timeless visual story that strengthens the brand's identity."
      developmentStrategies=""
      images={[NIRImg1, NIRImg2, [NIRImg31, NIRImg32], NIRImg4]}
    />
  );
}

export function Goat() {
  return (
    <ProjectPage
      isBranding
      category="Logo designing & Company Branding"
      title="The G.O.A.T Cafe"
      industry="Food & Beverage"
      cover={GOATCover}
      overview="GOAT Café was designed as a youth-focused pure veg café targeting Gen Z and college students. The goal was to make vegetarianism feel trendy, fresh, and culturally relevant rather than traditional."
      challenges="Key challenges included avoiding the overused leaf cliché, making 'pure veg' look cool, and standing out in a saturated café market. Scalability across digital and physical platforms was also carefully addressed."
      approach="We used a leaf in the logo to symbolize purity and health, paired with a bold, modern font to appeal to the college crowd. Vibrant yet minimal visuals and the slang-inspired name 'GOAT' created a fun, relatable identity."
      results="The brand identity came out stylish, approachable, and Instagram-worthy. It balanced the café's pure veg ethos with modern design, making it memorable and attractive to its young audience."
      developmentStrategies=""
      images={[GOATImg1, [GOATImg21, GOATImg22], GOATImg3]}
    />
  );
}

export function Aerovidya() {
  return (
    <ProjectPage
      isBranding
      category="Branding"
      title="Aerovidya"
      industry="Aviation & Education"
      cover={AEROCover}
      overview="Developed a professional brand identity for Aerovidya, combining aviation and education. The brand inspires aspiration while communicating educational excellence."
      challenges="Merging aviation aspiration with educational credibility in a single, cohesive brand identity that appeals to aviation enthusiasts and students."
      approach="Used aviation-inspired design elements with educational credibility markers. Soaring visuals and precision typography create an aspirational yet trustworthy brand."
      results="Created a brand identity that effectively positions Aerovidya as a premier aviation education destination, inspiring the next generation of aviation professionals."
      developmentStrategies=""
      images={[AEROImg1, [AEROImg21, AEROImg22], AEROImg3]}
    />
  );
}

export function CoffeeCulture() {
  return (
    <ProjectPage
      isBranding
      category="Branding"
      title="Coffee Culture"
      industry="Food & Beverage"
      cover={CCCover}
      overview="Created a warm, inviting brand identity for Coffee Culture. The branding celebrates the art and community of coffee with sophisticated yet approachable visual identity."
      challenges="Differentiating the Coffee Culture brand in a saturated coffee market while creating a brand that appeals to both casual coffee drinkers and enthusiasts."
      approach="Used warm tones, artisanal design elements, and community-focused messaging to create a brand that feels like a neighborhood gathering place."
      results="Delivered a brand identity that creates emotional connection with coffee lovers and positions Coffee Culture as a premium yet approachable coffee destination."
      developmentStrategies=""
      images={[CCImg1, [CCImg21, CCImg22], CCImg3]}
    />
  );
}

export function Motard() {
  return (
    <ProjectPage
      isBranding
      category="Branding"
      title="Motard"
      industry="Biking Club & Gear"
      cover={MOTARDCover}
      overview="Created a bold brand identity for Motard, a biking club and gear brand. The branding captures the freedom, adventure, and community of motorcycle culture."
      challenges="Creating a brand that appeals to diverse biking enthusiasts while maintaining an authentic, rebellious spirit that resonates with motorcycle culture."
      approach="Used bold, dynamic design elements inspired by speed and freedom. Raw typography, aggressive color choices, and riding culture aesthetics define the brand."
      results="Delivered an authentic brand identity that resonates deeply with the biking community and creates strong brand loyalty among motorcycle enthusiasts."
      developmentStrategies=""
      images={[
        [MOTARDImg11, MOTARDImg12],
        [MOTARDImg21, MOTARDImg22],
        [MOTARDImg31, MOTARDImg32],
      ]}
    />
  );
}

export function Smilevieu() {
  return (
    <ProjectPage
      category="Branding"
      title="Smilevieu"
      industry="Healthcare & Branding"
      cover={SMILECover}
      overview="Developed a friendly, trustworthy brand identity for Smilevieu, a healthcare brand. The branding communicates care, wellness, and positive health outcomes."
      challenges="Creating a healthcare brand that is both medically credible and warmly approachable, making patients feel comfortable and confident."
      approach="Used soft, welcoming colors and friendly design elements to create a brand that reduces healthcare anxiety while maintaining professional credibility."
      results="Created a brand identity that successfully combines healthcare authority with warmth, improving patient comfort and brand trust."
      developmentStrategies=""
      images={[]}
    />
  );
}

export function Voltus() {
  return (
    <ProjectPage
      category="Branding"
      title="Voltus"
      industry="Energy & Technology"
      cover={VOLTUSCover}
      overview="Created a powerful brand identity for Voltus in the energy and technology sector. The brand communicates innovation, power, and technological leadership."
      challenges="Positioning Voltus as an innovative energy technology company through brand identity that conveys both power and technological sophistication."
      approach="Used bold electric design metaphors, dynamic color gradients, and forward-thinking typography to create a brand that radiates energy and innovation."
      results="Delivered a brand identity that establishes Voltus as a credible technology leader in the energy sector with strong visual impact."
      developmentStrategies=""
      images={[]}
    />
  );
}

export function GreenTara() {
  return (
    <ProjectPage
      category="Branding"
      title="Green Tara"
      industry="Eco Wellness"
      cover={GTCover}
      overview="Developed a serene, nature-inspired brand identity for Green Tara eco wellness. The branding celebrates sustainability and holistic wellness through organic visual elements."
      challenges="Creating a brand that authentically communicates eco-consciousness and wellness values while standing out in the growing sustainable wellness market."
      approach="Used natural color palettes, organic shapes, and botanical design elements to create a brand identity that feels genuinely connected to nature and wellness."
      results="Created a brand identity that resonates with eco-conscious consumers and positions Green Tara as an authentic, values-driven wellness brand."
      developmentStrategies=""
      images={[]}
    />
  );
}

export function Spinteq() {
  return (
    <ProjectPage
      category="Logo designing & Company Branding"
      title="SPINTeQ"
      industry="Enterprise Solutions"
      cover={MICCover}
      overview="SPINTeQ was designed as a futuristic autonomous enterprise solutions brand, combining technology, motion, and premium visual identity. The goal was to create a clean, modern, and scalable brand system that reflects innovation, trust, precision, and forward-thinking enterprise growth."
      challenges="The main challenge was to build a brand identity that looks futuristic and premium while still remaining simple, readable, and professional across platforms. It had to maintain consistency in logo usage, typography, gradients, spacing, and dark-first visual styling without making the design look cluttered."
      approach="The identity was developed using an S + Q monogram, orbit-inspired elements, blue-to-purple gradients, and a gold accent to represent motion, technology, value, and excellence. Clean geometric typography, strong contrast, and structured spacing were used to create a modern corporate look suitable for websites, dashboards, documents, and merchandise."
      results="A sleek and professional brand guideline was created for SPINTeQ, giving the brand a futuristic, connected, and premium personality. The final system ensures consistent logo usage, strong visual appeal, clear communication, and flexible application across digital and physical brand touchpoints."
      developmentStrategies="SPINTeQ was developed using a modular and scalable brand system to maintain consistency across all platforms. The strategy focused on dark-first layouts, responsive visual assets, clean typography, and flexible logo usage for future expansion across dashboards, websites, documents, and digital products."
      images={[
        [MMImg11, MMImg12, MMImg13, MMImg14],
        [MMImg21, MMImg22, MMImg23, MMImg24],
      ]}
    />
  );
}

export function Itel() {
  return (
    <ProjectPage
      category="Logo designing & Company Branding"
      title="Itel"
      industry="Telecom & Devices"
      cover={MICCover}
      overview="This project was designed as a launch campaign for a new itel smartphone, focused on showcasing its key features and capabilities. The goal was to create a clear and engaging digital experience that highlights the phone's value while building excitement and driving customer interest."
      challenges="This project was designed as a launch campaign for a new itel smartphone, focused on showcasing its key features and engaging interactions. The goal was to create a high-impact digital experience with rich animations, delivered within a tight timeline while maintaining clarity, performance, and brand appeal."
      approach="This project was designed as a launch campaign for a new itel smartphone, focused on showcasing its features through dynamic visuals and interactive animations. The goal was to deliver a polished digital experience within a short timeline by carefully prioritizing simpler animations first and progressively tackling more complex interactions with precision and attention to detail."
      results="A clean and seamless launch website was created for the new itel smartphone, designed to effectively showcase its features through smooth interactions and engaging visuals. Despite a tight timeline and animation-heavy requirements, the project was successfully delivered with precision, ensuring a polished and high-performing digital experience."
      developmentStrategies="The platform was built using a modular and scalable design system to ensure consistency and flexibility. It supports easy content updates, responsive performance across devices, and future expansion with analytics and additional service integrations."
      images={[
        [MMImg11, MMImg12, MMImg13, MMImg14],
        [MMImg21, MMImg22, MMImg23, MMImg24],
      ]}
    />
  );
}
