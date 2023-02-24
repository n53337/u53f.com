import cardsError from "@/assets/projects/cardsError-min.png";
import uubank2 from "@/assets/projects/uubank2-min.png";

// * Dummy data for Blogs

interface Blogs {
  id: string;
  title: string;
  description: string;
  banner: string;
  content: string;
  likes: number;
  comments: {
    id: string;
    name: string;
    comment: string;
  }[];
}

export const blogs: Blogs[] = [
  {
    id: "test 1",
    title: "test 1's title",
    description: "test 1 description",
    banner: cardsError,
    content: `
    # Hey there ⌨️

    <p align="center">
    <img src="https://raw.githubusercontent.com/n53337/n53337/master/man.gif" alt="Welcome" style="width:100%">
    </p>

    <p align="center">
      Visitor count<br>
      <img src="https://profile-counter.glitch.me/sagar-viradiya/count.svg" />
    </p>

    ## About me

    I'm Youssef Houffaine. A Front-end Developer who loves building beautiful user interfaces!

    ## Things I am passionate about

    - Front-end technologies 🕸️
    - Computer Science 🖥️

    ## Get in touch

    - Your future buddy to discuss Web related things and tech in general on [Twitter](https://twitter.com/n_53337).
    - Your future employee on [LinkedIn](https://www.linkedin.com/in/youssef-houffaine-a72366252/)
    - And of course GitHub you're already on (Recursion).

    `,
    likes: 123,
    comments: [
      {
        id: "comment1",
        name: "usef",
        comment: "test comment",
      },
      {
        id: "comment2",
        name: "anonymous",
        comment: "test comment 2",
      },
    ],
  },
  {
    id: "test 2",
    title: "test 2's title",
    description: "test 2 description",
    banner: uubank2,
    content: `
    # Hey there ⌨️

    <p align="center">
    <img src="https://raw.githubusercontent.com/n53337/n53337/master/man.gif" alt="Welcome" style="width:100%">
    </p>

    <p align="center">
      Visitor count<br>
      <img src="https://profile-counter.glitch.me/sagar-viradiya/count.svg" />
    </p>

    ## About me

    I'm Youssef Houffaine. A Front-end Developer who loves building beautiful user interfaces!

    ## Things I am passionate about

    - Front-end technologies 🕸️
    - Computer Science 🖥️

    ## Get in touch

    - Your future buddy to discuss Web related things and tech in general on [Twitter](https://twitter.com/n_53337).
    - Your future employee on [LinkedIn](https://www.linkedin.com/in/youssef-houffaine-a72366252/)
    - And of course GitHub you're already on (Recursion).


    `,
    likes: 15,
    comments: [
      {
        id: "comment1",
        name: "usef",
        comment: "test comment",
      },
      {
        id: "comment2",
        name: "anonymous",
        comment: "test comment 2",
      },
    ],
  },
];
