import {
  ArchiveBoxArrowDownIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";

import demagChainHoist from "../assets/product/demag-chain-hoist.jpg";
import hitachiChainHoist from "../assets/product/hitachi-chain-hoist.png";
import demagRopeHoist from "../assets/product/demag-rope-hoist.png";
import hitachiRopeHoist from "../assets/product/hitachi-rope-hoist.jpg";
import mitsubishiRopeHoist from "../assets/product/mitsubishi-rope-hoist.png";
import overheadCrane from "../assets/product/overhead-crane.jpg";
import gantryCrane from "../assets/product/gantry-crane.jpg";
import semiGantryCrane from "../assets/product/semigantry-crane.jpg";
import monorailCrane from "../assets/product/monorail-crane.jpg";
import underhungCrane from "../assets/product/underhung-crane.jpg";

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
    title: "Products",
    child: [
      {
        id: "hoist",
        title: "Hoist",
      },
      {
        id: "crane",
        title: "Crane",
      },
      {
        id: "lift",
        title: "Lift",
      },
      {
        id: "generator",
        title: "Generator",
      },
    ],
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
    id: "hoist",
    name: "Hoist",
    header: "",
    subCategory: [
      {
        id: "chain-hoist",
        name: "Chain Hoist",
        header: "",
        product: [
          {
            id: "demag-chain-hoist",
            name: "Demag Chain Hoist",
            brand: "Demag",
            manufacture: "Location A, Location B",
            contact: [
              {
                name: "Bayu",
                number: "",
              },
              {
                name: "Adi",
                number: "",
              },
              {
                name: "Ida",
                number: "",
              },
            ],
            photo: demagChainHoist,
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            id: "hitachi-chain-hoist",
            name: "Hitachi Chain Hoist",
            brand: "Hitachi",
            manufacture: "Location A, Location B",
            contact: [
              {
                name: "Bayu",
                number: "",
              },
              {
                name: "Adi",
                number: "",
              },
              {
                name: "Ida",
                number: "",
              },
            ],
            photo: hitachiChainHoist,
            description: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
      {
        id: "rope-hoist",
        name: "Rope Hoist",
        header: "",
        product: [
          {
            id: "demag-rope-hoist",
            name: "Demag Rope Hoist",
            brand: "Demag",
            manufacture: "Location A, Location B",
            contact: [
              {
                name: "Bayu",
                number: "",
              },
              {
                name: "Adi",
                number: "",
              },
              {
                name: "Ida",
                number: "",
              },
            ],
            photo: demagRopeHoist,
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            id: "hitachi-rope-hoist",
            name: "Hitachi Rope Hoist",
            brand: "Hitachi",
            manufacture: "Location A, Location B",
            contact: [
              {
                name: "Bayu",
                number: "",
              },
              {
                name: "Adi",
                number: "",
              },
              {
                name: "Ida",
                number: "",
              },
            ],
            photo: hitachiRopeHoist,
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            id: "mitsubishi-rope-hoist",
            name: "Mitsubishi Rope Hoist",
            brand: "Mitsubishi",
            manufacture: "Location A, Location B",
            contact: [
              {
                name: "Bayu",
                number: "",
              },
              {
                name: "Adi",
                number: "",
              },
              {
                name: "Ida",
                number: "",
              },
            ],
            photo: mitsubishiRopeHoist,
            description: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
    ],
  },
  {
    id: "lift",
    name: "Lift",
    header: "",
    product: [
      {
        id: "mitsubishi",
        name: "Mitsubishi",
        brand: "Mitsubishi",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: overheadCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "crane",
    name: "Crane",
    header: "",
    product: [
      {
        id: "overhead-crane",
        name: "Overhead Crane",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: overheadCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        id: "gantry-crane",
        name: "Gantry Crane",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: gantryCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        id: "semi-gantry-crane",
        name: "Semi Gantry Crane",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: semiGantryCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        id: "monorail-crane",
        name: "Monorail Crane",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: monorailCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
      {
        id: "underhung-crane",
        name: "Underhung Crane",
        manufacture: "Location A, Location B",
        contact: [
          {
            name: "Bayu",
            number: "",
          },
          {
            name: "Adi",
            number: "",
          },
          {
            name: "Ida",
            number: "",
          },
        ],
        photo: underhungCrane,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

export function getCategory(categoryId: string) {
  return products.find(({ id }) => categoryId === id);
}

export function getSubCategory(categoryId: string, subCategoryId: string) {
  const category = getCategory(categoryId);
  if (category && category.subCategory) {
    return category.subCategory.find(({ id }) => subCategoryId === id);
  }
}

export function getProduct(categoryId: string, productId: string) {
  const category = getCategory(categoryId);
  if (category) {
    if (category.subCategory) {
      for (const subCategory of category.subCategory) {
        const product = subCategory.product.find(({ id }) => productId === id);
        if (product) {
          return product;
        }
      }
    }
    if (category.product) {
      const product = category.product.find(({ id }) => productId === id);
      if (product) {
        return product;
      }
    }
  }
  return null;
}

export const galleries = [
  {
    id: "1",
    title: "Project Bla Bla Bla1",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery1,
  },
  {
    id: "2",
    title: "Project Bla Bla Bla2",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery2,
  },
  {
    id: "3",
    title: "Project Bla Bla Bla3",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery3,
  },
  {
    id: "4",
    title: "Project Bla Bla Bla4",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery4,
  },
  {
    id: "5",
    title: "Project Bla Bla Bla5",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery5,
  },
  {
    id: "6",
    title: "Project Bla Bla Bla6",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery6,
  },
  {
    id: "7",
    title: "Project Bla Bla Bla7",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery7,
  },
  {
    id: "8",
    title: "Project Bla Bla Bla8",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery8,
  },
  {
    id: "9",
    title: "Project Bla Bla Bla9",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery9,
  },
  {
    id: "10",
    title: "Project Bla Bla Bla10",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery10,
  },
  {
    id: "11",
    title: "Project Bla Bla Bla11",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery11,
  },
  {
    id: "12",
    title: "Project Bla Bla Bla12",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery12,
  },
  {
    id: "13",
    title: "Project Bla Bla Bla13",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery13,
  },
  {
    id: "14",
    title: "Project Bla Bla Bla14",
    subtitle: "PT Ayam Jago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod sit amet ante id rhoncus. Donec imperdiet, sapien nec efficitur feugiat, quam lacus dictum ex.",
    product: [
      {
        category: "",
        categoryId: "",
        product: "",
        productId: "",
      },
    ],
    location: "Location A, Location B",
    date: "12/02/2024",
    photo: gallery14,
  },
];

export const getGallery = (galleryId: string) => {
  return galleries.find(({ id }) => galleryId === id);
};
