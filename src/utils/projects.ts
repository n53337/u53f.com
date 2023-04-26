import u53f from "@/assets/projects/u53f.png";
import u53f2 from "@/assets/projects/u53f2.png";
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
      img: u53f,
      title: "U53f.com",
      description:
        "This Project required me to build a fully responsive website. I used Reactjs, along with Typescript and Tailwind CSS, for the front-end. I will be using Firebase to generate blogs when I build the blog page.",
    },
    overview: {
      banner: u53f,
      url: "https://u53f.com/",
      tags: ["React", "Typescript", "Tailwind"],
      description:
        "This project was a full-stack portfolio. It’s a website that represents me and my work, as well as my blog. I make sure that everything is looking good and minimal, including the performance. Creating these types of projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      previews: [u53f, u53f2],
    },
  },
  {
    id: "cards",
    brief: {
      img: "https://github.com/n53337/Interactive-card-details-form/raw/main/screenshot.jpg",
      title: "Credit Card Form",
      description:
        "the goal of this project is to design and implement a user-friendly form that allows users to fill in their card details accurately and efficiently. The project aims to achieve this goal by providing real-time updates, error messages, optimal layout, and interactive element feedback. Ultimately, the project seeks to enhance the user experience of filling out the form.",
    },
    overview: {
      banner:
        "https://github.com/n53337/Interactive-card-details-form/raw/main/screenshot.jpg",
      url: "https://fem-cards.netlify.app/",
      tags: ["Html", "Sass", "Javascript"],
      description:
        "In order to provide a seamless user experience, there are several key features that users should be able to enjoy when filling out a form. Firstly, the form should update in real-time, allowing users to see the card details update as they fill in the necessary fields. Additionally, error messages should be displayed when the form is submitted if any input field is left empty or if the card number, expiry date, or CVC fields are not in the correct format. This will help users to quickly identify and correct any errors that may have occurred. Another important feature is the ability to view the optimal layout depending on their device's screen size. This ensures that users can easily navigate the form regardless of the device they are using. Lastly, users should be able to see hover, active, and focus states for interactive elements on the page. This provides visual feedback to the user and enhances their overall experience. By incorporating these features, users will be able to fill out the form quickly and accurately, resulting in a positive user experience.",
      previews: [
        "https://github.com/n53337/Interactive-card-details-form/raw/main/screenshot.jpg",
      ],
    },
  },
  {
    id: "minvoicer",
    brief: {
      img: min3,
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
