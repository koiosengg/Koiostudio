import React from "react";
import ProjectPage from "../Home/ProjectPage";

// NE Structures
import NECover from "../../assets/Projects/NE Structures/Cover.webp";
import NEImg11 from "../../assets/Projects/NE Structures/Image 1.1.webp";
import NEImg12 from "../../assets/Projects/NE Structures/Image 1.2.webp";
import NEImg13 from "../../assets/Projects/NE Structures/Image 1.3.webp";
import NEImg14 from "../../assets/Projects/NE Structures/Image 1.4.webp";
import NEImg21 from "../../assets/Projects/NE Structures/Image 2.1.webp";
import NEImg22 from "../../assets/Projects/NE Structures/Image 2.2.webp";
import NEImg23 from "../../assets/Projects/NE Structures/Image 2.3.webp";
import NEImg24 from "../../assets/Projects/NE Structures/Image 2.4.webp";

export function NE_Structures() {
  return (
    <ProjectPage
      category="Website"
      title="NE Structures"
      industry="Construction Industries"
      websiteUrl="https://nestructures.co/"
      cover={NECover}
      overview="Designed a corporate website for a steel building solutions provider with a clean, minimalistic layout to enhance user experience. Focused on intuitive navigation, modern visuals, and clear content presentation to reflect the brand's professionalism."
      challenges="Ideating and designing certain sections of the homepage proved to be a challenging task. It required in-depth design research to find the right balance between aesthetics and functionality. The process helped refine the overall user experience and design consistency."
      approach="Used a clean and structured layout with visual breakdowns to clearly represent each stage of the service process. Ensured that every step was thoughtfully presented for better user understanding. Focused on clarity and flow to guide visitors smoothly through the content."
      results="Created a clean and structured UI that aligns with the industrial brand's identity. Focused on simplicity, clarity, and usability to ensure a seamless user experience. The design reflects the brand's professionalism while maintaining visual consistency across all elements."
      developmentStrategies="The banner background was customized to accurately reflect the grid line pattern from the design, ensuring consistency across devices. A dynamic gallery section was developed to showcase various client projects. Dedicated pages were also built for products, services, and infrastructure to present the client's offerings in a clear and organized manner."
      images={[[NEImg11, NEImg12, NEImg13, NEImg14], [NEImg21, NEImg22, NEImg23, NEImg24]]}
    />
  );
}
