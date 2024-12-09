
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'



export const navigation = [
  {name:"Home",path:"/"},
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  //{ name: 'Solutions', path: '/solutions' },
  //{ name: 'Pricing', path: '/pricing' },
  { name: 'Courses', path: '/courses' },
  { name: 'Contact', path: '/contact' },
];



export  const features = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ]

  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: '/videos/highlight-first.mp4',
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: '/videos/highlight-sec.mp4',
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: '/videos/highlight-third.mp4',
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: '/videos/highlight-fourth.mp4',
      videoDuration: 3.63,
    },
  ];

  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: '/images/yellow.png',
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: '/images/blue.png',
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: '/images/white.png',
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: '/images/black.png',
    },
  ];


  
export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];