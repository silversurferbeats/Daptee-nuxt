import { readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
  const users = [
    {
      name: "Dr. Adam Kreiger",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/307.jpg",
      email: "Gideon.Vandervort67@hotmail.com",
      password: "lQmOsEFUc6opjD8",
      id: "1",
    },
    {
      name: "Lori Oberbrunner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg",
      email: "Ava_Bogisich94@yahoo.com",
      password: "NuIOuT2HWy2tgHG",
      id: "2",
    },
    {
      name: "Lauren Rodriguez",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/119.jpg",
      email: "Elizabeth_Senger33@hotmail.com",
      password: "0hNwue_0_r0XlMc",
      id: "3",
    },
    {
      name: "Melanie Pfannerstill",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg",
      email: "Gisselle14@hotmail.com",
      password: "RV82nDhyRO_Jwk8",
      id: "4",
    },
    {
      name: "Elizabeth Grimes",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/708.jpg",
      email: "Ryley.Leannon@yahoo.com",
      password: "bIzlgg56wV6TVQL",
      id: "5",
    },
    {
      name: "Sarah Schumm",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/352.jpg",
      email: "Hal_Schuster70@yahoo.com",
      password: "u0cgGwVuWXazJp8",
      id: "6",
    },
    {
      name: "Rhonda Fritsch",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/74.jpg",
      email: "Eva77@gmail.com",
      password: "KzIPp730i1TwVtD",
      id: "7",
    },
    {
      name: "Derrick Wehner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/225.jpg",
      email: "Montana_Labadie@hotmail.com",
      password: "XgwICtkNBEyQ5mD",
      id: "8",
    },
    {
      name: "Phillip Jacobs",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/839.jpg",
      email: "Deangelo.Muller32@gmail.com",
      password: "tWf4T4GsJuYcXHl",
      id: "9",
    },
    {
      name: "Erica Friesen",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      email: "Max.Fritsch@yahoo.com",
      password: "ufQPTuUJSP9tROz",
      id: "10",
    },
    {
      name: "Alonzo Hand Jr.",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg",
      email: "Christiana48@gmail.com",
      password: "RzXKFasfZVTPXoo",
      id: "11",
    },
    {
      name: "Ira Hilpert",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg",
      email: "Gisselle_Rutherford87@gmail.com",
      password: "hftLHu99c1ZVbzB",
      id: "12",
    },
    {
      name: "Bryan Harris",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg",
      email: "Levi.Kub2@yahoo.com",
      password: "fRm8vaDAZwL4CQd",
      id: "13",
    },
    {
      name: "Dr. Laurence Jacobs",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg",
      email: "Aurelie.Klein@hotmail.com",
      password: "gJw3OhK_O1i0Hup",
      id: "14",
    },
    {
      name: "Roman Swaniawski",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg",
      email: "Tatyana.Kiehn@yahoo.com",
      password: "TGf21h8t6bVa0HX",
      id: "15",
    },
    {
      name: "Mr. Cora Quitzon",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/582.jpg",
      email: "Emmanuelle76@gmail.com",
      password: "LDOoFr1rAFSNIAw",
      id: "16",
    },
    {
      name: "Calvin Yost III",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/862.jpg",
      email: "Robb42@yahoo.com",
      password: "71Rs6LrG4rfHasY",
      id: "17",
    },
    {
      name: "Dr. Gail Mraz",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
      email: "Lavada.Johnson66@hotmail.com",
      password: "t7PHB3nRGXqibFt",
      id: "18",
    },
    {
      name: "Mrs. Jesse McLaughlin",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg",
      email: "Jewell_Torphy@yahoo.com",
      password: "ZTdREnCicTQtvvB",
      id: "19",
    },
    {
      name: "Kristina Klein",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
      email: "Astrid_Dickinson8@hotmail.com",
      password: "ZCwnjldT2G1Kk4r",
      id: "20",
    },
    {
      name: "Daptee",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
      email: "Daptee@hotmail.com",
      password: "Daptee2025",
      id: "21",
    },
  ];

  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      console.log('Body recibido (POST):', body);

      const userFound = users.find(user => user.name === body.name && user.password === body.password);

      if (userFound) {
        return userFound;
      } else {
        throw createError({
          statusCode: 401, // Use 401 for authentication failure
          statusMessage: 'Credenciales incorrectas'
        });
      }
    } catch (error) {
      console.error('Error en POST:', error);
      throw createError({
        statusCode: 500, // Internal server error
        statusMessage: 'Error interno del servidor'
      });
    }
  } else if (event.node.req.method === 'GET') {
    console.log('Petición GET recibida');
    return users; // Devuelve la lista de usuarios para GET
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: 'Método no permitido'
    });
  }
});
