import logo from "../assets/images/logo.png";
import logo_icon from "../assets/images/Logo_Icon.png";
import logo_icon_white from "../assets/images/Logo_Icon_White.png";
import audio_book from "../assets/images/AudioBook.jpg";
import fictional_book from "../assets/images/FictionalBook.jpg";
import non_fictional_book from "../assets/images/NonFictionalBook.jpg";
import action_books from "../assets/images/ActionBook.webp";
import art_photography from "../assets/images/ArtPhotography.jpg";
import mystry_books from "../assets/images/MystryBooks.webp";
import thiller_books from "../assets/images/thillerBooks.avif";
import romance from "../assets/images/RomanceBook.jpg";

export const images = {
  logo,
  logo_icon,
  logo_icon_white,
  audio_book,
  fictional_book,
  non_fictional_book,
  action_books,
  art_photography,
  mystry_books,
  thiller_books,
  romance,
};

export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishDate: "1925-04-10",
    pages: 180,
    available: true,
    starReview: 4.5,
    coverImage:
      "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishDate: "1960-07-11",
    pages: 281,
    available: false,
    starReview: 4.8,
    coverImage:
      "https://i.pinimg.com/736x/37/05/bc/3705bc85fda7bf4d3d6957cbee610654.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    publishDate: "1949-06-08",
    pages: 328,
    available: true,
    starReview: 4.6,
    coverImage:
      "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&quality=89&ssl=1",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishDate: "1813-01-28",
    pages: 279,
    available: true,
    starReview: 4.7,
    coverImage:
      "https://i.pinimg.com/736x/5c/12/6e/5c126ebc616400330587845a172c110d.jpg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishDate: "1951-07-16",
    pages: 214,
    available: false,
    starReview: 4.3,
    coverImage:
      "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
  },
  {
    id: 6,
    title: "Moby-Dick",
    author: "Herman Melville",
    publishDate: "1851-10-18",
    pages: 635,
    available: true,
    starReview: 4.0,
    coverImage: "https://m.media-amazon.com/images/I/91xNmlf86yL._SY342_.jpg",
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    publishDate: "1869-01-01",
    pages: 1225,
    available: false,
    starReview: 4.9,
    coverImage: "https://m.media-amazon.com/images/I/81oHM-dzefL._SY342_.jpg",
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishDate: "1937-09-21",
    pages: 310,
    available: true,
    starReview: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/61mjnP-qt6L._SY466_.jpg",
  },
  {
    id: 9,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishDate: "1866-01-01",
    pages: 430,
    available: false,
    starReview: 4.7,
    coverImage:
      "https://i.pinimg.com/736x/70/d3/02/70d302fa2e288cd9979e0794cd37d227.jpg",
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishDate: "1932-08-18",
    pages: 268,
    available: true,
    starReview: 4.6,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
  },
  {
    id: 12,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publishDate: "1847-10-16",
    pages: 500,
    available: false,
    starReview: 4.5,
    coverImage: "https://m.media-amazon.com/images/I/511zNn8fzXL._SY342_.jpg",
  },
  {
    id: 13,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    publishDate: "1847-12-17",
    pages: 416,
    available: true,
    starReview: 4.4,
    coverImage:
      "https://images.squarespace-cdn.com/content/v1/5d40204073334a0001f2f066/1602439836717-GUAAN9EXNKDOGD9SKKZM/3674767a84174c9df69d8706e755e37a.jpg?format=2500w",
  },
  {
    id: 14,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishDate: "1988-01-01",
    pages: 208,
    available: false,
    starReview: 4.3,
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
  },
  {
    id: 15,
    title: "The Odyssey",
    author: "Homer",
    publishDate: "-800-01-01",
    pages: 541,
    available: true,
    starReview: 4.8,
    coverImage: "https://m.media-amazon.com/images/I/81g0AATkO9L._SY342_.jpg",
  },
  {
    id: 16,
    title: "Les Misérables",
    author: "Victor Hugo",
    publishDate: "1862-01-01",
    pages: 1463,
    available: false,
    starReview: 4.7,
    coverImage:
      "https://cdn.penguin.co.uk/dam-assets/books/9780099529965/9780099529965-jacket-large.jpg",
  },
  {
    id: 17,
    title: "Dracula",
    author: "Bram Stoker",
    publishDate: "1897-05-26",
    pages: 418,
    available: true,
    starReview: 4.6,
    coverImage:
      "https://i.pinimg.com/736x/04/48/ff/0448ffbeaf3dc4b57ede715694a96b51.jpg",
  },
  {
    id: 18,
    title: "Frankenstein",
    author: "Mary Shelley",
    publishDate: "1818-01-01",
    pages: 280,
    available: false,
    starReview: 4.5,
    coverImage:
      "https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/ecd0f3b2ed8023964fbb00ac1cd91c21/a/d/adg-0000001045_1_jpg.webp",
  },
  {
    id: 19,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publishDate: "1890-07-01",
    pages: 254,
    available: true,
    starReview: 4.4,
    coverImage: "https://m.media-amazon.com/images/I/71KxgOTl4-L._SY385_.jpg",
  },
];
