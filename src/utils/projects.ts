import uubank from "@/assets/projects/uubank-min.png";
import uubank2 from "@/assets/projects/uubank2-min.png";
import cardsError from "@/assets/projects/cardsError-min.png";
import cardsLoading from "@/assets/projects/cardsLoading-min.png";
import cardsSuccess from "@/assets/projects/cardsSuccess-min.png";

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
    id: "bank",
    brief: {
      img: uubank,
      title: "Ubank",
      description:
        "**NOTE** this mini project is just a placeholder for now, i will add large project later on !",
    },
    overview: {
      banner: uubank2,
      url: "https://uubank.netlify.app/",
      tags: ["html", "css", "javascript"],
      description:
        "**NOTE** this mini project is just a placeholder for now, i will add large project later on !",
      previews: [uubank, uubank2],
    },
  },
  {
    id: "cards",
    brief: {
      img: cardsError,
      title: "Cards",
      description:
        "**NOTE** this mini project is just a placeholder for now, i will add large project later on !",
    },
    overview: {
      banner: cardsError,
      url: "https://fem-cards.netlify.app/",
      tags: ["html", "css", "javascript"],
      description:
        "**NOTE** this mini project is just a placeholder for now, i will add large project later on !",
      previews: [cardsLoading, cardsSuccess],
    },
  },
];
