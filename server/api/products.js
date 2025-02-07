import { createError, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const products = [
  {
    name: "Licensed Rubber Bacon",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg",
    price: "826.00",
    availability: false,
    id: "1",
  },
  {
    name: "Ergonomic Metal Shoes",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/139.jpg",
    price: "961.00",
    availability: true,
    id: "2",
  },
  {
    name: "Luxurious Granite Chips",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/502.jpg",
    price: "33.00",
    availability: true,
    id: "3",
  },
  {
    name: "Ergonomic Steel Mouse",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg",
    price: "92.00",
    availability: true,
    id: "4",
  },
  {
    name: "Oriental Cotton Pizza",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg",
    price: "702.00",
    availability: false,
    id: "5",
  },
  {
    name: "Intelligent Plastic Mouse",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/964.jpg",
    price: "621.00",
    availability: true,
    id: "6",
  },
  {
    name: "Tasty Plastic Mouse",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
    price: "35.00",
    availability: true,
    id: "7",
  },
  {
    name: "Oriental Concrete Chicken",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/239.jpg",
    price: "601.00",
    availability: false,
    id: "8",
  },
  {
    name: "Recycled Frozen Hat",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/260.jpg",
    price: "794.00",
    availability: false,
    id: "9",
  },
  {
    name: "Gorgeous Soft Bacon",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/22.jpg",
    price: "914.00",
    availability: true,
    id: "10",
  },
  {
    name: "Oriental Fresh Towels",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg",
    price: "817.00",
    availability: false,
    id: "11",
  },
  {
    name: "Fantastic Wooden Pizza",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1028.jpg",
    price: "789.00",
    availability: true,
    id: "12",
  },
  {
    name: "Intelligent Bronze Salad",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg",
    price: "675.00",
    availability: false,
    id: "13",
  },
  {
    name: "Small Rubber Car",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/58.jpg",
    price: "185.00",
    availability: true,
    id: "14",
  },
  {
    name: "Tasty Cotton Mouse",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg",
    price: "84.00",
    availability: true,
    id: "15",
  },
  {
    name: "Handmade Metal Keyboard",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg",
    price: "2.00",
    availability: false,
    id: "16",
  },
  {
    name: "Handcrafted Wooden Bacon",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/520.jpg",
    price: "36.00",
    availability: false,
    id: "17",
  },
  {
    name: "Handmade Bronze Chips",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
    price: "288.00",
    availability: true,
    id: "18",
  },
  {
    name: "Unbranded Concrete Computer",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1169.jpg",
    price: "703.00",
    availability: true,
    id: "19",
  },
  {
    name: "Unbranded Soft Tuna",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
    price: "520.00",
    availability: true,
    id: "20",
  },
  {
    name: "Licensed Fresh Computer",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/412.jpg",
    price: "923.00",
    availability: false,
    id: "21",
  },
  {
    name: "Refined Frozen Chips",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg",
    price: "880.00",
    availability: true,
    id: "22",
  },
  {
    name: "Oriental Granite Table",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg",
    price: "354.00",
    availability: false,
    id: "23",
  },
  {
    name: "Elegant Granite Bacon",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/698.jpg",
    price: "275.00",
    availability: false,
    id: "24",
  },
  {
    name: "Bespoke Rubber Pizza",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/336.jpg",
    price: "207.00",
    availability: false,
    id: "25",
  },
  {
    name: "Unbranded Metal Shirt",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg",
    price: "165.00",
    availability: true,
    id: "26",
  },
  {
    name: "Tasty Wooden Ball",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/923.jpg",
    price: "884.00",
    availability: false,
    id: "27",
  },
  {
    name: "Rustic Bronze Sausages",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/437.jpg",
    price: "798.00",
    availability: false,
    id: "28",
  },
  {
    name: "Modern Bronze Chair",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/406.jpg",
    price: "824.00",
    availability: true,
    id: "29",
  },
  {
    name: "Luxurious Frozen Gloves",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/418.jpg",
    price: "421.00",
    availability: true,
    id: "30",
  },
  {
    name: "Electronic Wooden Fish",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/32.jpg",
    price: "925.00",
    availability: true,
    id: "31",
  },
  {
    name: "Tasty Steel Soap",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1019.jpg",
    price: "239.00",
    availability: true,
    id: "32",
  },
  {
    name: "Sleek Fresh Pizza",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/987.jpg",
    price: "474.00",
    availability: false,
    id: "33",
  },
  {
    name: "Sleek Granite Chair",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg",
    price: "488.00",
    availability: false,
    id: "34",
  },
  {
    name: "Licensed Wooden Chair",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/713.jpg",
    price: "404.00",
    availability: true,
    id: "35",
  },
  {
    name: "Small Concrete Car",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/355.jpg",
    price: "828.00",
    availability: true,
    id: "36",
  },
  {
    name: "Oriental Wooden Tuna",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/638.jpg",
    price: "52.00",
    availability: false,
    id: "37",
  },
  {
    name: "Elegant Wooden Mouse",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg",
    price: "458.00",
    availability: true,
    id: "38",
  },
  {
    name: "Modern Plastic Gloves",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/644.jpg",
    price: "651.00",
    availability: true,
    id: "39",
  },
  {
    name: "Generic Metal Salad",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/501.jpg",
    price: "293.00",
    availability: true,
    id: "40",
  },
];

  try {
    switch (event.node.req.method) {
      case "POST": {
        console.error('aun no esta habilitado este metodo :c')
      }
      case "GET": {
        const query = getQuery(event);
        const productId = query.name;

        if (productId) {
          const product = products.find((product) => product.name === productId);
          if (!product) {
            return createError({
              statusCode: 404,
              statusMessage: "Usuario no encontrado",
            });
          }
          return product;
        }
        return products;
      }
      default:
        return createError({
          statusCode: 405,
          statusMessage: "Método no permitido",
        });
    }
  } catch (error) {
    console.error("Error en la petición:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Error interno del servidor",
      message: error.message,
    });
  }
});
