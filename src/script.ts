type ItemNames = "nasir" | "faruk" | "ashraf";
interface Person {
  name: string;
  age: number;
  mail: string;
}

const nasir: Record<ItemNames, Person> = {
  nasir: {
    name: "nasir ahmed",
    age: 30,
    mail: "nasir@mail.com",
  },
  faruk: {
    name: "nasir ahmed",
    age: 30,
    mail: "nasir@mail.com",
  },
  ashraf: {
    name: "nasir ahmed",
    age: 30,
    mail: "nasir@mail.com",
  },
};
