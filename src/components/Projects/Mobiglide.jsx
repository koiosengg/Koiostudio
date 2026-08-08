import React from "react";
import ProjectPage from "../Home/ProjectPage";
import Cover from "../../assets/Projects/Mobiglide/Cover.webp";
import Img11 from "../../assets/Projects/Mobiglide/Image 1.1.webp";
import Img12 from "../../assets/Projects/Mobiglide/Image 1.2.webp";
import Img13 from "../../assets/Projects/Mobiglide/Image 1.3.webp";
import Img14 from "../../assets/Projects/Mobiglide/Image 1.4.webp";
import Img21 from "../../assets/Projects/Mobiglide/Image 2.1.webp";
import Img22 from "../../assets/Projects/Mobiglide/Image 2.2.webp";
import Img23 from "../../assets/Projects/Mobiglide/Image 2.3.webp";
import Img24 from "../../assets/Projects/Mobiglide/Image 2.4.webp";

export function Mobiglide() {
  return (
    <ProjectPage
      category="Website"
      title="Mobiglide"
      industry="Human Resources"
      cover={Cover}
      overview="Developed a website for an engineering company specializing in process automation and performance-driven solutions. The design emphasizes clarity and efficiency, aligning with the company's technical focus. Content is structured to showcase services, expertise, and real-world results."
      challenges="Structuring the layouts while maintaining balance between visual cards was a challenging yet rewarding task. It required careful attention to spacing, alignment, and hierarchy to ensure a cohesive design. Achieving both aesthetic appeal and functional clarity took multiple iterations."
      approach="Applied clean spacing and subtle background elements to create a balanced, uncluttered layout. Emphasized contrasting colors to enhance readability and draw attention to key content. The overall design supports a modern and visually engaging user experience."
      results="Crafted a professional interface that reinforced the brand's technical and innovative image. The design combined clean layouts with precise visual elements to convey expertise. The overall look enhanced credibility and user trust."
      developmentStrategies="Developed a responsive layout that adapts seamlessly across devices. Implemented smooth scroll-based animations and interactive elements to enhance user engagement. Focused on performance optimization to ensure fast load times and a smooth browsing experience."
      images={[[Img11, Img12, Img13, Img14], [Img21, Img22, Img23, Img24]]}
    />
  );
}
