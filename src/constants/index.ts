import {
  ArchiveBoxArrowDownIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import cargoLift from "../assets/cargo-lift.jpg";
import passengerLift from "../assets/passenger-lift.jpg";
import chainHoist from "../assets/chain-hoist.jpg";
import ropeHoist from "../assets/rope-hoist.jpg";
// import generator from "../assets/generator.jpg";
// import gantryCrane from "../assets/gantry-crane.jpg";
// import overheadCrane from "../assets/overhead-crane.jpg";

import logoMeidoh from "../assets/logo-meidoh.png";
import logoCitra from "../assets/logo_citra.png";
import logoCSS from "../assets/logo_css-group.png";
import logoIndofood from "../assets/logo_indofood.png";
import logoIndopoly from "../assets/logo_indopoly.png";
import logoHM from "../assets/logo_pt-hm-sampoerna.png";
import logoSPI from "../assets/logo_pt-spi.png";
import logoSemenJakarta from "../assets/logo_semen-jakarta.png";
import logoSemenMerahPutih from "../assets/logo_semen-merah-putih.png";
import logoUnioleo from "../assets/logo_unioleo.png";

import gallery1 from "../assets/gallery/gallery (1).jpg";
import gallery2 from "../assets/gallery/gallery (2).jpg";
import gallery3 from "../assets/gallery/gallery (3).jpg";
import gallery4 from "../assets/gallery/gallery (4).jpg";
import gallery5 from "../assets/gallery/gallery (5).jpg";
import gallery6 from "../assets/gallery/gallery (6).jpg";
import gallery7 from "../assets/gallery/gallery (7).jpg";
import gallery8 from "../assets/gallery/gallery (8).jpg";
import gallery9 from "../assets/gallery/gallery (9).jpg";
import gallery10 from "../assets/gallery/gallery (10).jpg";
import gallery11 from "../assets/gallery/gallery (11).jpg";
import gallery12 from "../assets/gallery/gallery (12).jpg";
import gallery13 from "../assets/gallery/gallery (13).jpg";
import gallery14 from "../assets/gallery/gallery (14).jpg";

export const nav = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "customers",
    title: "Customers",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
];

export const stats = [
  {
    id: "stat-1",
    title: "Projects",
    value: "95+",
  },
  {
    id: "stat-1",
    title: "Customer",
    value: "150+",
  },
];

export const lineBusiness = [
  {
    name: "Supplier",
    text: "Kami adalah distributor resmi berbagai merk/brand vendor dan beragam jenis Lifting and Handling Equipment & Accessories.",
    icon: ArchiveBoxArrowDownIcon,
  },
  {
    name: "Design",
    text: "Kami memiliki tim teknisi spesialis yang siap melayani konsultasi, mendesain dan merancang solusi Lifting & Handling apapun kebutuhan industri anda.",
    icon: PencilIcon,
  },
  {
    name: "Manufacture",
    text: "Dengan fasilitas workshop modern dan tim engineer multi-skilled berpengalaman, kami siap melayani pengerjaan solusi Lifting & Handling yang Anda butuhkan.",
    icon: WrenchIcon,
  },
  {
    name: "Jasa & Installation",
    text: "Tim teknisi kami telah berpengalaman dalam pekerjaan/jasa maintenance berbagai peralatan industri dan penyedia instalasi Mechanical & Electrical Lifting Equipment.",
    icon: WrenchScrewdriverIcon,
  },
];

export const customers = [
  {
    name: "CSS Group",
    logo: logoCSS,
  },
  {
    name: "Citra Group",
    logo: logoCitra,
  },
  {
    name: "PT HM Sampoerna",
    logo: logoHM,
  },
  {
    name: "Indofood",
    logo: logoIndofood,
  },
  {
    name: "Indopoly",
    logo: logoIndopoly,
  },
  {
    name: "Meidoh",
    logo: logoMeidoh,
  },
  {
    name: "SPI",
    logo: logoSPI,
  },
  {
    name: "Semen Jakarta",
    logo: logoSemenJakarta,
  },
  {
    name: "Semen Merah Putih",
    logo: logoSemenMerahPutih,
  },
  {
    name: "Unioleo",
    logo: logoUnioleo,
  },
];

export const products = [
  {
    id: "chain-hoist",
    name: "Chain Hoist",
    product: [
      {
        name: "product",
        photo: chainHoist,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "rope-hoist",
    name: "Rope Hoist",
    product: [
      {
        name: "product",
        photo: ropeHoist,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "cargo-lift",
    name: "Cargo Lift",
    product: [
      {
        name: "product",
        photo: cargoLift,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "passenger-lift",
    name: "Passenger Lift",
    product: [
      {
        name: "product",
        photo: passengerLift,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

export function getCategory(categoryId:string) {
  return products.find(({ id }) => categoryId === id);
}

export const galleries = [
  {
    id: "1",
    title: "Project Bla Bla Bla1",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery1,
  },
  {
    id: "2",
    title: "Project Bla Bla Bla2",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery2,
  },
  {
    id: "3",
    title: "Project Bla Bla Bla3",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery3,
  },
  {
    id: "4",
    title: "Project Bla Bla Bla4",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery4,
  },
  {
    id: "5",
    title: "Project Bla Bla Bla5",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery5,
  },
  {
    id: "6",
    title: "Project Bla Bla Bla6",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery6,
  },
  {
    id: "7",
    title: "Project Bla Bla Bla7",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery7,
  },
  {
    id: "8",
    title: "Project Bla Bla Bla8",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery8,
  },
  {
    id: "9",
    title: "Project Bla Bla Bla9",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery9,
  },
  {
    id: "10",
    title: "Project Bla Bla Bla10",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery10,
  },
  {
    id: "11",
    title: "Project Bla Bla Bla11",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery11,
  },
  {
    id: "12",
    title: "Project Bla Bla Bla12",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery12,
  },
  {
    id: "13",
    title: "Project Bla Bla Bla13",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery13,
  },
  {
    id: "14",
    title: "Project Bla Bla Bla14",
    subtitle: "PT Bulu Dada",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: ""
      }
    ],
    location: "",
    photo: gallery14,
  },
];

export const getGallery = ( galleryId: any ) => {
  return galleries.find(({id}) => galleryId === id);
}
