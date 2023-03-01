// import uubank from "@/assets/projects/uubank-min.png";
// import uubank2 from "@/assets/projects/uubank2-min.png";
// import cardsError from "@/assets/projects/cardsError-min.png";
// import cardsLoading from "@/assets/projects/cardsLoading-min.png";
// import cardsSuccess from "@/assets/projects/cardsSuccess-min.png";
import u53f2 from "@/assets/projects/u53f2.png";
import minvoicer from "@/assets/projects/minvoicer.png";
import min2 from "@/assets/projects/min2.png";
import min3 from "@/assets/projects/min3.png";
import min4 from "@/assets/projects/min4.png";
import min5 from "@/assets/projects/min5.png";

interface Projects {
  id: string;
  brief: {
    img: string;
    title: string;
    description: string;
  };
  overview: {
    banner: string;
    url: string;
    tags: string[];
    description: string;
    previews: string[];
  };
}

export const projects: Projects[] = [
  {
    id: "u53f",
    brief: {
      img: "https://api.pikwy.com/web/63ff761d487e170bf42554b6.png",
      title: "U53f.com",
      description:
        "This Project required me to build a fully responsive website. I used Reactjs, along with Typescript and Tailwind CSS, for the front-end. I will be using Firebase to generate blogs when I build the blog page.",
    },
    overview: {
      banner: "https://api.pikwy.com/web/63ff761d487e170bf42554b6.png",
      url: "https://u53f.com/",
      tags: ["React", "Typescript", "Tailwind"],
      description:
        "This project was a full-stack portfolio. It’s a website that represents me and my work, as well as my blog. I make sure that everything is looking good and minimal, including the performance. Creating these types of projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      previews: [
        "https://api.pikwy.com/web/63ff761d487e170bf42554b6.png",
        u53f2,
      ],
    },
  },
  {
    id: "minvoicer",
    brief: {
      img: minvoicer,
      title: "Minvoicer",
      description:
        "This web application is a solution for automatically generating invoices with a nice user interface. I used React and Tailwind on Firebase. My mission for this project was to develop a full-stack application with the same design and business logic provided.",
    },
    overview: {
      banner: min5,
      url: "https://github.com/n53337/minvoicer/",
      tags: ["React", "Tailwind", "Firebase"],
      description:
        "For this project, I was tasked with developing a web application with a user-friendly interface. To accomplish this, I opted for React, which is known for its stability. Additionally, I didn't utilize Redux to handle state management; I rather used React's built-in hooks such as useContext and useReducer. Moving forward, I used Firebase as the backend service to store user data and maintain app functionality.",
      previews: [min2, min3, min4, min5],
    },
  },
];
